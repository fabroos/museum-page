import { SVGProps } from 'react'

export const CheckO = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z'
      fill='#000'
    />
    <path
      d='M10.243 16.314 6 12.07l1.414-1.414 2.829 2.828 5.656-5.657 1.415 1.415-7.071 7.07Z'
      fill='currentColor'
    />
  </svg>
)
