import { useContext } from 'react'
import styles from './styles.module.css';
import { appContext } from '../../context'

const ProductDetail = () => {

  const { isDetailOpen, closeProductDetail, currentDetail } = useContext(appContext)

  return (
    <aside className={` ${styles['product-detail']} ${isDetailOpen ? "flex" : "hidden"} flex-col fixed right-0 rounded top-0 bg-white  border-black border`}>
      <div className="flex justify-between items-center p-6">
        <h2 className='font-medium text-xl'>Detail</h2>
        <svg onClick={() => closeProductDetail()} style={{cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
        <figure className="px-6">
          <img className="w-full h-full rounded-lg" src={currentDetail.data?.image} alt={currentDetail.data?.title} />
        </figure>
        <div className='flex flex-col p-6'>
          <span className="font-medium text-2xl mb-2">$ {currentDetail.data?.price}</span>
          <span className="font-medium text-md">{currentDetail.data?.title}</span>
          <span className="font-medium text-sm">{currentDetail.data?.description}</span>
        </div>
    </aside>
  )
}

export default ProductDetail
