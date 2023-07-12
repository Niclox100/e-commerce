import { useContext } from 'react'
import { appContext } from '../../context'
import Link from 'next/link';
import { useRouter } from 'next/router';
import OrderCard from '../../components/OrderCard';

const MyOrder = () => {

  const {orders} = useContext(appContext)
  const router = useRouter()

  const orderId = parseInt(router.query.id)
  const currentOrder = orders.filter((order)=> {
    return order.id == orderId
  })
  
  return (
    <>
      <div className='overflow-y-auto flex flex-col'>
      <div className='flex w-full items-center relative justify-center mb-4'>
        <h1 className=''>My Order</h1>
        <Link href="/my-orders" className='absolute left-0'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>
      </div>
        {
          currentOrder && currentOrder[0].products.map((product)=> (
            <OrderCard
              key={product.id} 
              title={product.title}
              image={product.image}
              price={product.price}
              id={product.id}
            />
          ))
        }
        <div className='flex justify-between items-center mt-6'>
          <span className='font-light text-xl'>Total:</span>
          <span className='font-medium text-xl'>{currentOrder && currentOrder[0].totalPrice}</span>
        </div>
      </div>
  </>
  )
}

export default MyOrder