import { useCallback, useState } from 'react'

export function useOpen () {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = () => setIsOpen(!isOpen)
  return { open, close, toggle, isOpen }
}
