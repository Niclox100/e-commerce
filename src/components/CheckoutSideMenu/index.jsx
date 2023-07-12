import React, { useContext } from 'react'
import Link from 'next/link';
import styles from './styles.module.css';
import { appContext } from '../../context'
import OrderCard from '../OrderCard';

const CheckoutSideMenu = () => {

  const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, shoppingCart, shoppingCartTotalPrice, addToOrders, removeProductFromCart} = useContext(appContext)

  const handleCheckout = () => {
    addToOrders()
  }


  return (
    <aside className={` ${styles['checkout-side-menu']} ${isCheckoutSideMenuOpen ? "flex" : "hidden"} flex-col fixed right-0 rounded top-0 bg-white  border-black border px-3 pb-3`}>
      <div className="flex justify-between items-center p-6">
        <h2 className='font-medium text-xl'>My Order</h2>
        <svg onClick={() => closeCheckoutSideMenu()} style={{cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
        <figure>
          <img className="w-full h-full rounded-lg" src={shoppingCart.data?.image} alt={shoppingCart.data?.title} />
        </figure>
        <div className='overflow-y-auto flex-1'>
          {shoppingCart?.length > 0 ? shoppingCart.map((product)=> (
            <OrderCard
              key={product.id} 
              title={product.title}
              image={product.image}
              price={product.price}
              id={product.id}
              onClick={()=>removeProductFromCart(product.id)}
            />
          )): <p className="text-center">Add Products to your cart!</p>}
      </div>
      {shoppingCart?.length > 0 && (
      <>
        <div className='flex justify-between items-center mt-6'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${shoppingCartTotalPrice}</span>
        </div>
        <div>
          <Link href="/my-orders/last">
            <button className="w-full bg-black py-3 text-white rounded mt-3" onClick={() => handleCheckout()}>
              Checkout
            </button>
          </Link>
        </div>
      </>
      )}
    </aside>
  )
}
export default CheckoutSideMenu
