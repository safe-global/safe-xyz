import { ComponentType, ReactNode } from 'react'
import dynamic from 'next/dynamic'
import type { DynamicOptionsLoadingProps } from 'next/dynamic'

type LoadingComponent = (props: DynamicOptionsLoadingProps) => ReactNode

const getComponentByName = (component: string, FallbackComponent: LoadingComponent): ComponentType => {
  let Component: ComponentType

  try {
    const DynamicComponent = dynamic(() => import(`@/components/${component}`), {
      loading: FallbackComponent,
    })
    Component = DynamicComponent

    if (Component == null) throw new Error(`Component ${component} is null`)
  } catch (e) {
    console.error(e)
    Component = FallbackComponent as ComponentType
  }

  return Component
}

export default getComponentByName
