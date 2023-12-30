import styled from "../styles/InputPop.module.css"
interface InputPopProps {
    placeHolder: string,
    typed: string,
    require?: boolean,
    name: string
}
const InputPop: React.FC<InputPopProps> =({placeHolder,name,require=true, typed})=>{
    return (
        <input className={styled.input} required={require} name={name} type={typed} placeholder={placeHolder}></input>
    )
}
export default InputPop