import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Intro from '@/components/Intro'
import Loader from '@/components/Loader'
import Error from '@/components/Error'
import Filteration from '@/components/Filteration'
import ProductList from '@/components/ProductList'
import { useCallback, useContext, useEffect } from 'react'
import { AppContext } from '@/context/ContextApi'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data, handleData} = useContext(AppContext);
  const {isLoading, isError, products} = data;
  const apiCall = useCallback(() => {
    if(products.length === 0){
      fetch('./api/products')
      .then((response) => response.json())
      .then((data) => console.log(data));
    }
  }, [products]);
  useEffect(() => {
    apiCall();
  }, [apiCall]); 
  
  return (
   <Layout>
    <Intro />
    {/* products */}
     <div className='my-6 relative min-h-screen flex justify-center items-center'>
    {isLoading &&  <Loader />}
    {!isLoading && isError &&  <Error msg={isError} />}
    {products.length > 0 && <div className='flex gap-4'>
      <Filteration />
      {products.map((item:any)=>(
        <ProductList key={item.id} {...item} />
      ))}
      </div>}
     </div>
   </Layout>
  )
}
