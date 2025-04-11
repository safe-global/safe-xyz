import useSWRImmutable from 'swr/immutable'

type ShapshotProposalVars = {
  space: string
  orderBy: 'created'
  orderDirection: 'desc' | 'asc'
}

export type SnapshotProposal = {
  id: string
  title: string
  state: 'active' | 'closed' | 'pending'
  author: string
}

type GqlResponse = {
  data: {
    proposals: SnapshotProposal[]
  }
  errors?: Error[]
}

const getSnapshot = async (variables: ShapshotProposalVars): Promise<SnapshotProposal[]> => {
  const SNAPSHOT_GQL_ENDPOINT = 'https://hub.snapshot.org/graphql'

  const query = `
        query ($space: String, $orderBy: String, $orderDirection: OrderDirection) {
            proposals(
                first: 200,
                orderBy: $orderBy,
                orderDirection: $orderDirection
                where: { space_in: [$space] },
            ) {
                id
                title
                state
                author
            }
        }
    `

  const { data, errors } = (await fetch(SNAPSHOT_GQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then((res) => res.json())) as GqlResponse

  // GraphQL returns an array of errors in res.errors
  if (errors) {
    throw errors[0]
  }

  return data.proposals
}

export const getSafeSnapshot = (space: string): Promise<SnapshotProposal[]> => {
  return getSnapshot({
    space,
    orderBy: 'created',
    orderDirection: 'desc',
  })
}

export const useSafeSnapshot = () => {
  const QUERY_KEY = 'snapshot'
  const SNAPSHOT_SPACE = 'safe.eth'

  return useSWRImmutable([QUERY_KEY], () => getSafeSnapshot(SNAPSHOT_SPACE))
}
