import React,{useContext} from 'react'

import { Context } from '../../Context/ProductContext'
import ProductCard from '../ProductCard/ProductCard'

function Shop() {
    const {products} = useContext(Context)
  return (
    <div className='grid grid-cols-3 gap-x-3 gap-y-12 mt-10 place-items-center overflow-y-scroll h-screen'>
      {products.map(product => {
        return <ProductCard key={product.id} product={product}/>
      })}
    </div>
  )
}

export default Shop