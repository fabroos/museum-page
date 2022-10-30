import { useEffect, useState } from 'react'

export function useClientScroll () {
  const [scroll, setScroll] = useState(0)
  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return scroll
}
