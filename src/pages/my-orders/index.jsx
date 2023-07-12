import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import OrdersCard from '../../components/OrdersCard'
import Link from 'next/link'
import { appContext } from '../../context'

const MyOrders = () => {

  const {orders} = useContext(appContext)
  return (
    <>
      <div className='overflow-y-auto flex flex-col'>
      <div className='flex w-full items-center relative justify-center mb-4'>
        <h1 className='font-medium text-2xl'>My Orders</h1>
        <Link href="/" className='absolute left-0'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>
      </div>
      {
        orders.map((orderItem, i) => {
         return(
          <Link key={i} href={`/my-order/${orderItem.id}`}>
            <OrdersCard 
              totalProducts={orderItem.products} 
              totalPrice={orderItem.totalPrice} />
          </Link>
         ) 
        })
      }
        <div className='flex justify-between items-center mt-6'>

        </div>
      </div>
  </>
  )
}

export default MyOrders

