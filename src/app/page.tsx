import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Neighborhood Market, California | Power Market',
  description: 'Everything you need right around the corner',
}

export default function Home() {
  return (
    <h1 className='py-4'>Home page</h1>
  )
}
