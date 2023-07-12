import { useContext } from 'react'
import { appContext } from '../../../context'
import OrderCard from '../../../components/OrderCard';
import Link from 'next/link';

const MyOrders = () => {

  const {orders} = useContext(appContext)

  return (
    <>
      <div className='overflow-y-auto flex flex-col'>
      <div className='flex w-full items-center relative justify-center mb-4'>
        <h1 className=''>My Last Order</h1>
        <Link href="/my-orders" className='absolute left-0'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>
      </div>
        {orders && orders.length > 0 ? orders.slice(-1)[0].products.map((product)=> (
          <OrderCard
            key={product.id} 
            title={product.title}
            image={product.image}
            price={product.price}
            id={product.id}
          />
        )): <p className="text-center">There is no orders yet!</p>}
        <div className='flex justify-between items-center mt-6'>
          <span className='font-light text-xl'>Total:</span>
          <span className='font-medium text-xl'>${orders?.slice(-1)[0].products?.reduce((prev, {price}) =>( price += prev), 0)}</span>
        </div>
      </div>
  </>
  )
}

export default MyOrders

