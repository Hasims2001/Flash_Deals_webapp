// components/Layout.tsx
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps  {
 children: ReactNode
}
const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div >
      <Navbar />
    <div className='px-6 sm:px-16 '>
      <div className='min-h-screen'>{children}</div>
      <Footer />
    </div>
    </div>
  );
};

export default Layout;
