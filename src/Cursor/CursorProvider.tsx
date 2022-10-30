import { createContext, useContext, useEffect, useRef } from 'react'

type CursorContextValue = {
  updateCursor: (e: MouseEvent) => void
  expandCursor: () => void
  shrinkCursor: () => void
}

const cursorCtx = createContext<CursorContextValue | null>(null)

export const useCursorCtx = () => useContext(cursorCtx)

export function CursorProvider ({ children }) {
  const cursorRef = useRef(null)
  useEffect(() => {
    document.addEventListener('mousemove', updateCursor)

    return () => {
      document.removeEventListener('mousemove', updateCursor)
    }
  }, [])
  function updateCursor (e: MouseEvent) {
    if (cursorRef.current) {
      cursorRef.current.style.top = `${e.pageY - 24}px`
      cursorRef.current.style.left = `${e.pageX - 24}px`
    }
  }

  function expandCursor () {
    if (cursorRef.current) {
      cursorRef.current.style.transform = 'scale(2)'
    }
  }
  function shrinkCursor () {
    if (cursorRef.current) {
      cursorRef.current.style.transform = 'scale(1)'
    }
  }
  return (
    <cursorCtx.Provider value={{ updateCursor, expandCursor, shrinkCursor }}>
      <div className='cursor' ref={cursorRef} />
      {children}
    </cursorCtx.Provider>
  )
}
