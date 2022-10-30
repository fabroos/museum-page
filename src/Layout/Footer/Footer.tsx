import { Link } from '@/components/Link/Link'
import { Section } from '@/components/Section/Section'
import { Text } from '@/components/Text/Text'
import { BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

import { routes } from '@/ROUTES/routes'
export const Footer = () => {
  return (
    <Section className='flex flex-col py-4  text-center'>
      <div className='grid grid-cols-6 py-6 gap-3 border-b-2 border-black items-center'>
        <Link
          to='/#'
          className='col-span-6 text-center md:row-start-1 md:row-end-2 md:col-start-3 md:col-end-5'
        >
          <Text
            as='p'
            type='subtitle'
            className='col-span-6 font-bold uppercase'
          >
            EventLab
          </Text>
        </Link>

        {routes.map(section => (
          <NavLink
            key={section.name}
            to={section.path}
            className={({ isActive }) =>
              `font-bold uppercase col-span-6 text-center md:col-span-1 md:row-start-1 md:row-end-2 ${
                isActive ? 'underline decoration-2' : ''
              }`
            }
          >
            <Text as='p' type='span'>
              {section.name}
            </Text>
          </NavLink>
        ))}
      </div>
      <div className='flex flex-col gap-12 py-6 px-4'>
        <Text as='p' type='span' className='font-semibold'>
          EVENTLAB IS A EXAMPLE TEMPLATE WITH PLATFORM FOR EVERYONE WHO VALUES
          ART AND DESIGN, CREATING INVITATIONS TO THE EVENT AND PROVIDING A
          VALUABLE SOURCE OF KNOWLEDGE.
        </Text>
        <div className='flex gap-6 text-2xl justify-center'>
          <Link as='a' target='_blank' to='https://www.facebook.com/'>
            <BsTwitter />
          </Link>
          <Link as='a' target='_blank' to='https://www.facebook.com/'>
            <BsFacebook />
          </Link>
          <Link as='a' target='_blank' to='https://www.facebook.com/'>
            <BsLinkedin />
          </Link>
        </div>
        <Text as='p' type='span' className='font-semibold'>
          COPYRIGHT © 2022 EVENTLAB PLATFORM. ALL RIGHT RESERVED
        </Text>
      </div>
    </Section>
  )
}
