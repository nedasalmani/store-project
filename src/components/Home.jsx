import React from 'react'
import { PRODUCTS } from '../data/Products';
import Product from './Product';

 const Home = () => {
  return (
    <main className='px-6 py-6 bg-gray-100 '>

      <header>
      <h2 className='text-gray-700 text-6xl font-semibold'>Product</h2>
      <h3 className='text-2xl font-semibold pl-1'>For Everyone</h3>
      </header>

      <div>
        <h4 className='font-bold mt-12 pb-2 border-b border-gray-300'>Latest Products</h4>
      </div>
      
     <div className='grid lg:grid-cols-3 gap-4' >
      {PRODUCTS.map((productData)=> <Product key={productData.id} data={productData} />)}

      </div>

      <div>
        <div>Load More</div>
      </div>
    </main>
  )
}
export default Home;
