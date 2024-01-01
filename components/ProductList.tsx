import React from 'react'

interface ProductListProps{
  id: number,
  imgUrl: string,
  tag: string,
  title: string,
  price: number,
  discount: number,
  finalPrice: number
}
const ProductList = ({id, imgUrl,tag, title, price, discount, finalPrice}:ProductListProps) => {
  return (
    <div className='rounded'>
      <div>

      </div>
      <div className='px-4'>
        <h3 className='text-16'>{title}</h3>
      </div>
    </div>
  )
}
export default ProductList;