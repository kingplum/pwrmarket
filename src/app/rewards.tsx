import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Neighborhood Market, California | Power Market',
  description: 'Everything you need right around the corner',
}

export default function Home() {
  return (
    <h1>Home page</h1>
  )
}
