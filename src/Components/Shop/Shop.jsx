import React,{useContext} from 'react'

import { Context } from '../../Context/ProductContext'
import ProductCard from '../ProductCard/ProductCard'

function Shop() {
    const {products} = useContext(Context)

    console.log(products.map(product => {
       return product.items.map(prod => {
         console.log(prod)
       })
    }))

  return (
    <div className='grid grid-cols-3 gap-x-3 gap-y-12 mt-10 place-items-center h-screen overflow-y-scroll '>
      {products.map(product => {
        return product.items.map(item=> {
          return <ProductCard key={product.id} product={item}/>
        })
      })}
    </div>
  )
}

export default Shop