import { SVGProps } from 'react'

export const LargeArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='m13.012 19.162 1.813-1.822 1.418 1.41-4.231 4.255-4.255-4.231 1.41-1.418 1.846 1.834L10.998.997l2-.002.014 18.167Z'
      fill='currentColor'
    />
  </svg>
)
