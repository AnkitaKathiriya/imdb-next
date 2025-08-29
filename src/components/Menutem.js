import Link from 'next/link'
import React from 'react'
 export default function  Menuitem ({title, address, Icon}) {
  // const {title} = props
  return (
    <Link href={address} className='hover:text-amber-500'>
      <Icon className="text-2xl sm:hidden"/>
      <p className='uppercase hidden sm:inline text-sm'>{title}</p>
      {
        console.log(address)
      }
    </Link>
  )
 }