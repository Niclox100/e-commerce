import React, { useContext } from 'react'
import { appContext } from '../../context'

const OrderCard = ({ title, image, price, id, onClick}) => {

  const {removeProductFromCart} = useContext(appContext)
  
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-cover" src={image} alt={title}/>
        </figure>
        <div>
        <p className="text-sm font-light  overflow-ellipsis">{title}</p>
        </div>
      </div>
      <div className='flex justify-between'>
        <p className="text-lg font-medium gap-2">
          <span>$</span>
          <span>{price}</span>
        </p>
        {onClick && 
        <svg onClick={() => onClick()} style={{cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        }
      </div>
    </div>
  )
}

export default OrderCard