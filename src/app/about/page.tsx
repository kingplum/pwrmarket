import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Neighborhood Market, California | Power Market',
  description: 'Everything you need right around the corner',
}

export default function About() {
  return (
    <h1>About page</h1>
  )
}
