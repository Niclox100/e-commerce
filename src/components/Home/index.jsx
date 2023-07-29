import { useContext } from 'react'
import styles from "./style.module.css"
import Card from '../Card'
import ProductDetail from '../ProductDetail'
import CheckoutSideMenu from '../CheckoutSideMenu'
import { appContext } from '../../context'
import { useRouter } from 'next/router'

const Home = () => {

  const {products, searchedProductsInput, setSearchedProductsInput} = useContext(appContext)
  const router = useRouter()
  let category = router.query.category?.toLowerCase()

    
const renderProducts = (productsToRender) => {
  if(category === "clothes"){
    category = "clothing"
  }

  const categoryFilteredProducts = category ? productsToRender.filter((product)=>(
    product.category.includes(category)
  )) : products


  const searchedProducts = categoryFilteredProducts.filter((product)=> (
    product.title.toLowerCase().includes(searchedProductsInput?.toLowerCase())
    ))

  if(searchedProductsInput.length > 0) {
    if (searchedProducts.length > 0) {
      return(
        <>
          {searchedProducts?.map(item=> (
          <div key={item.id}>
            <Card data={item}/>
          </div>
        ))}
        </>
      )
    }
    else {
      return <p>There are no products that match the given criteria</p>
    }
  }
  else{
    return(
      <>
        {
          searchedProducts?.map(item=> (
            <div key={item.id}>
              <Card data={item}/>
            </div>
          ))
        }
      </>
    )
  }
}


  return (
    <>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'> Exclusive Products</h1>
      </div>
      <input 
        className='rounded-lg border border-black w-80 p-3 mb-4 focus:outline-none' 
        type="text" 
        placeholder='Search a product'
        onChange={(event)=> setSearchedProductsInput(event.target.value)}
      />
      <div className={`${styles.container}`}>
        {
         renderProducts(products)
        }
        </div>


      <ProductDetail/>
      <CheckoutSideMenu/>
    </>
  )
}

export default Home