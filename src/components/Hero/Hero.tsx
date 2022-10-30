import { FC } from 'react'
import { LargeArrow } from '../../assets/Icons/LargeArrow'
import { Star } from '../../assets/Icons/Star'
import { Link } from '../Link/Link'
import { Section } from '../Section/Section'
import { Text } from '../Text/Text'
type HeroProps = {
  title: string
  subtitle: string
  hookAnchor: string
  className?: string
}
export const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  hookAnchor,
  className
}) => {
  return (
    <Section
      className={
        'flex py-16 px-1 sm:px-4 items-end justify-between z-50 border-0 ' +
        className
      }
    >
      <div className='flex flex-col w-min'>
        <div className='flex flex-col lg:flex-row w-min'>
          <Text as='h2' type='bigTitle'>
            {title}
          </Text>
          <Star className='hidden md:block spin-3s' />
        </div>
        <div className='flex flex-col md:flex-row gap-4 items-start justify-between mt-10  md:items-center'>
          <Text as='p' type='subtitle' className='w-full'>
            {subtitle}
          </Text>
        </div>
      </div>
      <Link
        as='a'
        to={hookAnchor}
        className='border border-black rounded-full mx-2 p-2 group'
      >
        <LargeArrow className='group-hover:transform group-hover:-rotate-90 transition-transform duration-300 w-20 h-20' />
      </Link>
    </Section>
  )
}
