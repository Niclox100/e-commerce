import React, { useContext, useEffect } from 'react'
import { appContext } from '../../context'

const Card = (data) => {
  

  const {
    openProductDetail,
    closeProductDetail,
    setCurrentDetail,
    shoppingCart,
    addProductToCart,
    openCheckoutSideMenu,
    closeCheckoutSideMenu
  } = useContext(appContext)

  const isInCard = shoppingCart?.some(product => product.id === data.data.id);


  const showProductDetail = (productData) => {
    closeCheckoutSideMenu()
    openProductDetail()
    setCurrentDetail(productData)
  }

  const addProduct = (event, productData) => {
    event.stopPropagation()
    addProductToCart(productData.data)
    closeProductDetail()
    openCheckoutSideMenu()
  }

  const PlusIcon = () => (
    <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-1 p-1' onClick={(event)=> addProduct(event, data)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </div>
  )

  const CheckIcon = () => (
    <div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-1 p-1'>  
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6" onClick={(event)=> event.stopPropagation()}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </div>
  )


  return (
   <>
<div className="bg-white cursor-pointer w-56 h-72 overflow-hidden" onClick={() => showProductDetail(data)}>
  <figure className="relative mb-2 w-full h-4/5">
    <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-1 px-3 py-0.5">
      {data.data.category.name}
    </span>
    <img className="w-full h-full object-cover rounded-lg" src={data.data.image} alt={data.data.title} />
    {!isInCard ? <PlusIcon /> : <CheckIcon />}
  </figure>
  <div className="flex justify-between">
    <span className="text-sm font-light overflow-hidden overflow-ellipsis" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, maxWidth: '70%' }}>
      {data.data.title}
    </span>
    <span className="text-lg font-medium">$ {data.data.price}</span>
  </div>
</div>
   </>
  )
}

export default Card

