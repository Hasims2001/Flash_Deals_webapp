import styled from "../styles/InputPop.module.css"
interface InputPopProps {
    placeHolder: string,
    require?: boolean,
    name: string
}
const TextareaPop: React.FC<InputPopProps> =({placeHolder,name,require=true})=>{
    return (
        <textarea cols={24} rows={24} className={styled.input} style={{width: "25em", height:"10rem", maxWidth: "50vw"}} required={require} name={name}  placeholder={placeHolder}></textarea>
    )
}
export default TextareaPop