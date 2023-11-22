"use client"
import type { Metadata } from 'next'
import Link from 'next/link'
import { Asap } from 'next/font/google'
import './globals.css'
import { UserLocationContext } from './context/UserLocationContext'
import { useEffect, useState } from 'react'

const asap = Asap({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [userLocation,setUserLocation]=useState({});
  useEffect(()=>{
    getUserLocation();
  },[])
  const getUserLocation=()=>{
    navigator.geolocation.getCurrentPosition(function(pos){
      console.log(pos)
      setUserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
    })
  }
  return (
    <html lang="en">
      <body className={asap.className}>
          {children}
      </body>
    </html>
  )
}
