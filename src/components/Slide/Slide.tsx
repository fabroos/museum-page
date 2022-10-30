import { FC, PropsWithChildren } from 'react'
import { CheckO } from '../../assets/Icons/CheckO'
import { Text } from '../Text/Text'

type SlideProps = {
  messages: string[]
}
export const Slide: FC<SlideProps> = ({ messages }) => {
  return (
    <div className='flex gap-60 py-4 slide'>
      {messages.map((message, i) => (
        <SlideComponent key={i}>{message}</SlideComponent>
      ))}
    </div>
  )
}

const SlideComponent = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex font-bold gap-2 items-center whitespace-nowrap'>
      <CheckO className='text-purple-400' />
      <Text as='span' type='span' className='text-sm'>
        {children}
      </Text>
    </div>
  )
}
