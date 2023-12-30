import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Intro from '@/components/Intro'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '@/components/Loader'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch();
  const {isLoading, isError, products} = useSelector((store: any)=> store.ProductReducer)

  return (
   <Layout>
    <Intro />
    {/* products */}
     <div className='py-6 pos-relative'>
     <Loader />
     </div>
   </Layout>
  )
}
