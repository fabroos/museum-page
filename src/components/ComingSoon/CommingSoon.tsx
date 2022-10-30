import { BsBuilding } from 'react-icons/bs'
import { Section } from '../Section/Section'
import { Text } from '../Text/Text'

export const CommingSoon = () => {
  return (
    <Section className='h-[200px] flex items-center justify-center px-5'>
      <BsBuilding className='text-3xl' />
      <Text as='h1' type='title' className='text-center'>
        Coming Soon
      </Text>
    </Section>
  )
}
