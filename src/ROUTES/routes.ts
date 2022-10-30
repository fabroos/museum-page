import { Event } from '@/views/event/Event'
import { Home } from '@/views/home/home'
import { Mission } from '@/views/mission/Mission'
import { Ticket } from '@/views/ticket/Ticket'

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    name: 'Home Page'
  },
  {
    path: '/actally-event',
    component: Event,
    exact: true,
    name: 'Actally event'
  },
  {
    path: '/buy-ticket',
    component: Ticket,
    exact: true,
    name: 'Buy ticket'
  },
  {
    path: '/our-mission',
    component: Mission,
    exact: true,
    name: 'Our Mission'
  }
]
