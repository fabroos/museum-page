import { FC } from 'react'
const classNames = {
  bigTitle:
    'text-7xl sm:text-8xl md:text-9xl lg:text-[260px] font-bold text-centerwill-change-auto transition-all break-words',
  title:
    'text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold will-change-auto transition-all break-words',
  subtitle:
    'font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-6xl will-change-content transition-all',
  paragraph:
    'text-lg md:text-xl lg:text-2xl will-change-content transition-all',
  span:
    'text-md md:text-lg lg:text-xl will-change-auto transition-all break-words'
}

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode
  className?: string
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  type: 'bigTitle' | 'title' | 'subtitle' | 'paragraph' | 'span'
}

export const Text: FC<TextProps> = ({
  as,
  children,
  type,
  className,
  ...props
}) => {
  const Tag = as
  return (
    <Tag className={classNames[type] + ' ' + className} {...props}>
      {children}
    </Tag>
  )
}
