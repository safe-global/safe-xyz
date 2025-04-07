import { type ReactElement } from 'react'
import getComponentByName from '@/lib/getComponentByName'
import MetaTags from '../MetaTags'

const SEO_COMPONENT = 'common/MetaTags'

type ContentItem = {
  component: string
} & any

type ContentItems = Array<ContentItem>

const NotFoundComponent = () => <div>Component not found</div>

const PageContent = ({ content }: { content: ContentItems }): ReactElement => {
  const seo = content.find((item) => item.component === SEO_COMPONENT)
  const mainContent = content.filter((item) => item.component !== SEO_COMPONENT)

  return (
    <>
      {seo && <MetaTags {...seo} />}

      <div>
        {/* Render components from the content */}
        {mainContent.map(({ component, ...contentProps }, index) => {
          const Component = getComponentByName(component, NotFoundComponent)
          return <Component {...contentProps} key={index} />
        })}
      </div>
    </>
  )
}

export default PageContent
