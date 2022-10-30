import { FC } from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header'

type Props = {
  children: React.ReactNode
  overHeader?: React.ReactNode
}

export const Layout: FC<Props> = ({ children, overHeader }) => {
  return (
    <>
      {overHeader}
      <Header />
      {children}
      <Footer />
    </>
  )
}
