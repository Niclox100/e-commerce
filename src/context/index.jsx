import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


const appContext = React.createContext()

const AppContextProvider = ({children}) => {
  const [products, setProducts] = useState([])
  const [productsToShow, setProductsToShow] = useState([])
  const [searchedProductsInput, setSearchedProductsInput] = useState("")
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [currentDetail, setCurrentDetail] = useState([])
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([])
  const [shoppingCartTotalPrice, setShoppingCartTotalPrice] = useState([])
  const [categoryFilter, setCategoryFilter] = useState("")
  const [orders, setOrders] = useState([])


  // Product Detail - Open
  const openProductDetail = () => {
    setIsDetailOpen(true)
  }

  // Product Detail - Close

  const closeProductDetail = () => {
    setIsDetailOpen(false)
  }

  // Checkout SideBar - Open

  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(true)
  }

  // Checkout SideBar - Close

  const closeCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(false)
  }

  const setCartPrice = () => {
    const totalPrice = shoppingCart.reduce((acc, {price})=> {
      return acc += price
    }, 0)
    setShoppingCartTotalPrice(totalPrice.toFixed(2))
  }

  // Shopping Cart - Add
  const addProductToCart = (product) => {
    setShoppingCart([...shoppingCart, product])
  }

  // Shopping Cart - Remove

  const removeProductFromCart = (productId) => {
    const newShoppingCart = shoppingCart.filter((item)=> {
    return item.id !== productId
  })

    setShoppingCart(newShoppingCart)
  }

  // Order - Add

  const addToOrders = () => {
    const orderToAdd = {
      date: new Date(),
      products: shoppingCart,
      totalProducts: shoppingCart.length,
      totalPrice: shoppingCartTotalPrice,
      id: orders.length + 1
    }
    
    setOrders([...orders, orderToAdd])
    setShoppingCart([])
    setSearchedProductsInput("")
  }



  useEffect(()=> {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  useEffect(()=> {
    setCartPrice()
  }, [shoppingCart])


  return (
    <appContext.Provider value={{
      products,
      isDetailOpen,
      openProductDetail,
      closeProductDetail,
      currentDetail,
      setCurrentDetail,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      shoppingCart,
      addProductToCart,
      removeProductFromCart,
      shoppingCartTotalPrice,
      orders,
      addToOrders,
      searchedProductsInput,
      setSearchedProductsInput,
    }}>
      {children}
    </appContext.Provider>
  )
}

export {appContext, AppContextProvider}