import { SVGProps } from 'react'

export const Star = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={76}
    height={74}
    fill='none'
    {...props}
  >
    <path
      d='m38 0 4.964 24.36L62.426 8.89 50.57 30.743l24.853.658-23.129 9.12L70.91 57l-23.58-7.881 3.668 24.59L38 52.514 25.003 73.708l3.667-24.59L5.091 57l18.615-16.48L.577 31.401l24.853-.658L13.574 8.89l19.462 15.47L38 0Z'
      fill='#000'
    />
  </svg>
)
