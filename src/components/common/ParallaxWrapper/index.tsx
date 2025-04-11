import type { ReactNode } from 'react'
import useScrollParallax, { type ParallaxProps } from '@/hooks/useScrollParallax'

const ParallaxWrapper = ({
  translateX,
  translateY,
  depth,
  children,
  direction,
}: ParallaxProps & { children: ReactNode }) => {
  const ref = useScrollParallax({ translateX, translateY, depth, direction })

  return <div ref={ref}>{children}</div>
}

export default ParallaxWrapper
