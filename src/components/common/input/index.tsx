import { TextField, Box, styled, TextFieldProps, withStyles, Theme, useTheme , StyledComponentProps, BoxProps} from "@mui/material";
import { InputWrapper } from "./style";
import clsx from "clsx"



const CustomInput = styled(TextField)((props)=>({
    ...props
}))



interface InputProps{
    label:string;
    containerClassName?:string
}


const Input: React.FC<InputProps & TextFieldProps> = ({label,containerClassName,className, ...props}) => {
   const theme=useTheme()
    return(
        <InputWrapper className={containerClassName} theme={theme}>
            <label>{label}</label>
            <CustomInput {...props} className="input"  fullWidth/>
        </InputWrapper>
    )
}

export default Input