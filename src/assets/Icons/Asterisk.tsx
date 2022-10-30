import { SVGProps } from 'react'

export const Asterisk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={28}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M11 6h2v4.079l3.341-2.34 1.147 1.639L13.743 12l3.745 2.622-1.147 1.639L13 13.92V18h-2v-4.079l-3.341 2.34-1.148-1.639L10.257 12 6.51 9.378 7.66 7.739 11 10.08V6Z'
      fill='currentColor'
    />
  </svg>
)
