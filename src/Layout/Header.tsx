import { routes } from '@/ROUTES/routes'
import { useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { Asterisk } from '../assets/Icons/Asterisk'
import { Menu } from '../assets/Icons/Menu'
import { Link } from '../components/Link/Link'
import { Text } from '../components/Text/Text'
import { useClientScroll } from '../hooks/useClientScroll'
import { useOpen } from '../hooks/useOpen'
import './Header.styles.css'

export const Header = () => {
  const { isOpen, toggle } = useOpen()
  const scroll = useClientScroll()
  const isScrolled = useMemo(() => scroll > 300, [scroll])
  return (
    <div
      className={`${isScrolled ? 'top-0 fixed left-0 w-full z-40' : 'block'} `}
    >
      <div className={`relative`}>
        <div
          className={`menu-header bg-yellow-300 transition-all duration-500 absolute w-full z-[100] ease-in-out lg:hidden ${
            isOpen ? 'visible top-full' : '-top-[70vh]'
          }`}
        >
          <div className='absolute top-full left-0 w-full z-10'>
            <div className='flex font-bold flex-col'>
              {routes.map(section => (
                <Link
                  as={NavLink}
                  key={section.name}
                  className='px-5 py-3 bg-yellow-300 hover:bg-yellow-200 border-b-2 border-black'
                  to={section.path}
                >
                  {section.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <header className='bg-yellow-300 w-full z-50 relative'>
          <div
            className={`relative text-xl flex border-b-2 border-black divide-x-2 divide-black ${
              isScrolled ? '' : 'h-40'
            }`}
          >
            <Link
              as={NavLink}
              to='/'
              className='px-5 py-4 font-bold bg-yellow-200 hover:bg-yellow-100 flex-1'
            >
              EventLab
            </Link>
            <Link
              as={NavLink}
              to='/actally event'
              className='hidden lg:flex py-4 px-5 font-bold flex-1 border-r-2 hover:bg-yellow-200 transition-colors relative items-start enter justify-between z-10
          after:w-0 after:bg-black after:h-full after:transition-all after:-z-10 hover:after:w-full after:absolute after:left-0 after:top-0 hover:text-yellow-300 group'
            >
              <Text as='span' type='span'>
                Actually event
              </Text>
              <Asterisk className='group-hover:transform group-hover:rotate-[360deg] transition-transform duration-[600ms]' />
            </Link>
            {routes.slice(1, routes.length).map(section => (
              <Link
                to={section.path}
                key={section.name}
                className='hidden lg:flex px-5 py-4 font-bold flex-1 hover:bg-yellow-200 transition-colors'
              >
                {section.name}
              </Link>
            ))}

            <button
              className='flex lg:hidden py-4 px-5 font-bold flex-1 border-r-2 hover:bg-yellow-200 transition-colors relative items-start justify-between z-10
          after:w-0 after:bg-black after:h-full after:transition-all after:-z-10 hover:after:w-full after:absolute after:left-0 after:top-0 hover:text-yellow-300 group'
              onClick={toggle}
              // aria-open={isOpen}
            >
              <Text as='span' type='paragraph'>
                Menu
              </Text>
              <Menu className='group-hover:transform group-hover:rotate-180 transition-transform duration-[600ms] w-5' />
            </button>
          </div>
        </header>
      </div>
    </div>
  )
}
