import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { appContext } from '../../context'

const NavBar = () => {

  const router = useRouter()
  const {shoppingCart, openCheckoutSideMenu} = useContext(appContext)

  return (
    <>
      <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-normal top-0'>
        <ul className='flex items-center gap-3'>
          <Link href="/">
            <li className='font-semibold text-lg'>Shopi</li>
          </Link>
          
          <Link href="/">
            <li className={router.pathname === '/all' ? 'underline' : undefined}>All</li>
          </Link>
          <Link href="/clothes">
            <li className={router.pathname === '/clothes' ? 'underline' : undefined}>Clothes</li>
          </Link>
          <Link href="/jewelery">
            <li className={router.pathname === '/jewelery' ? 'underline' : undefined}>Jewelery</li>
          </Link>
          <Link href="/electronics">
            <li className={router.pathname === '/electronics' ? 'underline' : undefined}>Electronics</li>
          </Link>
        </ul>

        <ul className='flex items-center gap-3'>
          <li>Nico@test.com</li>
          <Link href="/my-orders">
            <li className=' cursor-pointer hover:underline'>My Orders</li>
          </Link>
           <li className=' cursor-pointer hover:underline'>My Account</li>
            <li className=' cursor-pointer hover:underline'>Sign in</li>
            <li className='flex items-center justify-center cursor-pointer' onClick={() => openCheckoutSideMenu()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              {shoppingCart.length}</li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar