import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Intro from '@/components/Intro'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Layout>
    <Intro />
   </Layout>
  )
}
