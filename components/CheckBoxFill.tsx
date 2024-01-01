import React from 'react'
import styles from "../styles/CheckBoxFill.module.css";
interface CheckBoxFillProps {
  handleChange: Function,
  name: string,
  filterName: string
}
export const CheckBoxFill = ({handleChange, name, filterName}: CheckBoxFillProps) => {
  return (
    <div className='flex my-2 items-center gap-2 text-lg'>
    <label className={styles.container}>
    <input  type="checkbox" name={name} onChange={(e)=> handleChange(e, filterName)}  /> 
    <div className={styles.checkmark}></div>
  </label>
  <span>{name}</span>
  </div>
  )
}
