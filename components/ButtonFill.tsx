import React from 'react'
import styles from "../styles/ButtonFilll.module.css"
interface ButtonFillProps {
    value: string,
    typedValue: 'button' | 'submit' | 'reset',
    handleClick?: React.FC,
    widthed?: string | number
}
export const ButtonFill:React.FC<ButtonFillProps> = ({widthed, value, typedValue="button", handleClick}) => {
  return (
    <button  className={styles.button} onClick={handleClick} style={{width: widthed}} type={typedValue}>{value}</button>
  )
}

