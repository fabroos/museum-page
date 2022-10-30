import { FC } from 'react'
import { Link as ReactRouterLink, LinkProps } from 'react-router-dom'
import { useCursorCtx } from '../../Cursor/CursorProvider'

type Props = LinkProps & {
  children: React.ReactNode
  as?: 'a' | React.ComponentType
}

export const Link: FC<Props> = ({ to, children, as, ...props }) => {
  const { shrinkCursor, expandCursor } = useCursorCtx()
  const Component = as || ReactRouterLink
  return (
    <Component
      to={to}
      href={to as string}
      onMouseEnter={expandCursor}
      onMouseLeave={shrinkCursor}
      {...props}
    >
      {children}
    </Component>
  )
}
