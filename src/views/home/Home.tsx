import { Hero } from '@/components/Hero/Hero'
import { Link } from '@/components/Link/Link'
import { Section } from '@/components/Section/Section'
import { Slide } from '@/components/Slide/Slide'
import { Text } from '@/components/Text/Text'
import { Layout } from '@/Layout/Layout/Layout'
const slidesMessages = [
  `A NEW EVENT HAS BEEN ADDED TO OUR LIST. VIEW THE DETAILS AND
  DESCRIPTION OF THE EVENT.`,
  `ANOTHER SECTION HAS BEEN ADDED TO OUR LIST. VIEW THE DETAILS AND
  THE DESCRIPTION OF THE SECTION.`,
  `ANASTASIA WAS FOUND IN THE SECTION. WATCH THE VIDEO AND LEARN ALL ABOUT HER.`
]

export const Home = () => {
  return (
    <Layout
      overHeader={
        <Section className='bg-purple-400 flex relative z-50'>
          <Slide messages={slidesMessages} />
        </Section>
      }
    >
      <main className='bg-yellow-300'>
        <Hero
          title='Gallery'
          subtitle='WE CREATE THE NEXT LEVEL CREATION.'
          hookAnchor='#newEvent'
          className='bg-yellow-300'
        />
        <section
          id='newEvent'
          className='flex flex-col md:flex-row px-6 py-12 gap-6 items-center'
        >
          <picture className='md:w-1/2'>
            <img
              src='https://images.unsplash.com/photo-1564399579883-451a5d44ec08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80'
              className='aspect-square will-change-auto transition-all h-auto w-full'
            />
          </picture>
          <div className='flex flex-col gap-6 xl:gap-12 items-start mt-10 md:w-1/2 justify-center xl:px-16 xl:py-20'>
            <div className='flex flex-col'>
              <Text as='p' type='paragraph' className='font-bold'>
                NEW EVENT
              </Text>
              <Text as='p' type='span'>
                ABOUT OUR MISSION
              </Text>
            </div>
            <Text as='p' type='paragraph' className='font-bold'>
              OUR AGENCY CREATING AND INVITES THE QUALITY EVENT MEETING,
              FESTIVAL, MUSEUM SCULPTURE ON THE UNITED STATES — SINCE ©1982. A
              NEW VISION OF THE SHOWCASE.
            </Text>
            <Text as='p' type='span' className='font-bold'>
              WE CREATE INSPIRING EVENTS COMBINED WITH ART. EFFECTIVE FORM OF
              INVOLVING PEOPLE IN PRODUCT PROMOTION WITH MODERN WEBSITE.
            </Text>
          </div>
        </section>
        <Section
          className='flex flex-col border-t-2 border-emerald-600 px-6 py-12 xl:px-20 items-start group md:justify-between transition-colors
         hover:bg-gradient-to-t to-yellow-200 from-yellow-300'
        >
          <div className='flex flex-col w-full md:items-center text-emerald-600 md:flex-row md:justify-between transition-all group-hover:-translate-y-3 transform-gpu will-change-auto'>
            <div className='flex flex-col'>
              <Text as='p' type='span' className='font-bold uppercase'>
                Upcoming Event
              </Text>
              <Text as='p' type='title' className='font-bold'>
                Museum
              </Text>
            </div>
            <div className='flex flex-col'>
              <Text as='p' type='span' className='font-bold uppercase'>
                Sculpture
              </Text>
              <Text as='p' type='paragraph'>
                Opening New Collect
              </Text>
            </div>
          </div>

          <div className='flex flex-col md:flex-row-reverse gap-6 xl:gap-12 items-center mt-10 justify-center w-full transition-all group-hover:-translate-y-3 transform-gpu will-change-auto'>
            <img
              src='https://images.unsplash.com/photo-1569533816166-49d08c516a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
              alt='museum img'
              className='md:w-1/2'
            />
            <div className='flex-col flex gap-12'>
              <Text as='p' type='paragraph' className='font-semibold'>
                We are inspired by artistic art rich in the tradition of
                multiculturalism. The new week opens a new exhibition to which
                we pleasantly invite you — Please check and view more gallery
                with detailed descriptions in events subpage.
              </Text>
              <Text as='p' type='paragraph' className='font-bold'>
                CHECK AND DISCOVERY ABOUT GOING ON IN THE ARTISTIC AND MUSEUM
                WORLD. BROWSE THROUGH THE ART EVENTS AND STAY UP TO DATE WITH
                WHAT HAPPENING.
              </Text>
              <Link
                to='/museum'
                className='w-full border py-4 border-black text-center'
              >
                <Text
                  as='p'
                  type='span'
                  className='font-bold uppercase group-hover:translate-x-3 transform'
                >
                  View More
                </Text>
              </Link>
            </div>
          </div>
        </Section>
        <Section className='flex flex-col md:flex-row px-6 py-12 xl:px-20 items-start group md:justify-between gap-6'>
          <img
            src='https://images.unsplash.com/photo-1548811579-017cf2a4268b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80'
            alt='museum img'
            className='md:w-1/2 max-h-96 md:max-h-full w-full object-cover'
          />
          <div className='flex md:w-1/2 flex-col gap-6 xl:gap-12 items-start mt-10 justify-center w-full'>
            <Text as='h3' type='title' className='font-bold'>
              “WE INVITE YOU TO THE OPEN DAYS OF THE EVENT ABOUT ART AND DESIGN”
            </Text>
            <Text
              as='p'
              type='paragraph'
              className='font-semibold spacing tracking-widest'
            >
              CEO EVENTLAB —
            </Text>
          </div>
        </Section>
        <Section className='p-4'>
          <Link
            to='/buy ticket'
            className='bg-black h-[500px] flex md:flex-row flex-col items-center justify-center w-full group'
          >
            <Text as='p' type='title' className='text-yellow-300 relative'>
              BUY{' '}
            </Text>
            <Text
              as='span'
              type='title'
              className='text-yellow-300 mx-2 group-hover:after:w-full relative after:w-0 after:absolute after:h-full after:bg-yellow-300 z-10 after:left-0 after:top-0 after:transition-all group-hover:text-black after:-z-10'
            >
              TICKETS
            </Text>
            <div className='relative w-40 aspect-square'>
              <img
                className='rounded-full translate-y-1/2 aspect-square group-hover:translate-y-10 transform-gpu transition-all'
                src='https://images.unsplash.com/photo-1550133109-9f69197dce25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              />
              <img
                className='rounded-full -translate-y-1/2 -top-1/2 aspect-square group-hover:-translate-y-10 transform-gpu transition-all'
                src='https://images.unsplash.com/photo-1550133109-9f69197dce25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              />
            </div>
          </Link>
        </Section>
      </main>
    </Layout>
  )
}
