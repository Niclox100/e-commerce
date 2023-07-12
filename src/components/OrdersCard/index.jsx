import { useContext } from 'react'
import { appContext } from '../../context'

const OrdersCard = ({ totalProducts, totalPrice}) => {

  const {removeProductFromCart} = useContext(appContext)
  
  return (
    <div className="flex justify-between items-center mb-4 border border-black w-80 p-4 rounded-lg">
      <div>
        <p>Date: 01/02/2023</p>
        <p className='font-light'>{totalProducts.length} articles</p>
      </div>
        <div className='flex items-center justify-center gap-2'>
          <p className='font-medium text-xl'>$ {totalPrice}</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
    </div>
  )
}

export default OrdersCard