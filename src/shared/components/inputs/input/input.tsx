
import { Input as InputAntd, InputProps as InputPropsAntd} from "antd"
import { BoxInput, TitleInput } from "./input.styles"

interface InputProps  extends InputPropsAntd{
    title?: string;
    margin?: string
}


const Input: React.FC<InputProps> = ({ title, margin,  ...props }) => {
    return (
    <BoxInput style={{ margin }}>
        {title && <TitleInput>{title}</TitleInput>}
         <InputAntd {...props}/>
    </BoxInput>
    )
   
}

export default Input;