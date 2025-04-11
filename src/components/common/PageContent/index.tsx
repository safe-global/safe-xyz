import { useMemo, type ReactElement } from 'react'
import getComponentByName from '@/lib/getComponentByName'
import MetaTags from '../MetaTags'
import DOMPurify from 'isomorphic-dompurify'
import _cloneDeepWith from 'lodash/cloneDeepWith'

const SEO_COMPONENT = 'common/MetaTags'

const EditableFields = {
  title: true,
  text: true,
  caption: true,
}

type ContentItem = {
  component: string
} & Record<string, unknown>

type ContentItems = Array<ContentItem>

const NotFoundComponent = () => <div>Component not found</div>

const getSanitizedProps = (props: Partial<ContentItem>): ReactElement => {
  return _cloneDeepWith(props, (item, key) => {
    if (typeof item !== 'string' || (key && !(key in EditableFields))) return

    const hasHtml = /[<>]/.test(item)
    const cleanHtml = useMemo(() => (hasHtml ? DOMPurify.sanitize(item) : item), [hasHtml, item])

    if (!hasHtml) return <>{item}</>

    return <span dangerouslySetInnerHTML={{ __html: cleanHtml }} />
  })
}

const PageContent = ({ content }: { content: ContentItems }): ReactElement => {
  const seo = content.find((item) => item.component === SEO_COMPONENT)
  const mainContent = content.filter((item) => item.component !== SEO_COMPONENT)

  // Extract SEO props without the component property
  const { component: _, ...seoProps } = seo || { component: '' }

  return (
    <>
      {seo && <MetaTags {...seoProps} />}

      <div>
        {mainContent.map(({ component, ...rest }, index) => {
          const Component = getComponentByName(component, NotFoundComponent)

          const sanitizedProps = getSanitizedProps(rest)

          return <Component {...sanitizedProps} key={index} />
        })}
      </div>
    </>
  )
}

export default PageContent
