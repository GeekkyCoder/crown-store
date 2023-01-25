import React from 'react'
import CatogoryItem from '../CatogoryItem/CatogoryItem'

function Directory({catogories}) {
  return (
    <div className='flex justify-between flex-wrap items-center mt-10'>
       {catogories.map((catogory) => {
        return <CatogoryItem key={catogory.id} catogory={catogory}/>
       })}
    </div>
  )
}

export default Directory