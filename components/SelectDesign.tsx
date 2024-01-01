import React from 'react'
interface SelectDesignProps{
    children: React.ReactNode,
    onChangehandler: Function
}
export const SelectDesign = ({children, onChangehandler}:SelectDesignProps) => {
  return (
    <select className='px-4 py-2 border-2 rounded-lg outline-none ' onChange={(e)=> onChangehandler(e)}>{children}</select>
  )
}
