import { FC } from 'react'

type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

export const Section: FC<SectionProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <section
      className={`flex border-t-2 border-black relative ${className}`}
      {...props}
    >
      {children}
    </section>
  )
}
