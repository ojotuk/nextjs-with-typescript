import { TextField, Box, styled, TextFieldProps, withStyles, Theme, useTheme ,} from "@mui/material";
import { inputStyles } from "./style";
import clsx from "clsx"



const CustomInput = styled(TextField)(({theme})=>({
    display:"flex",
}))

const CustomContainer = styled(Box)(({theme})=>inputStyles(theme))


interface InputProps{
    label:string;
    containerClassName?:string
}


const Input: React.FC<InputProps & TextFieldProps> = ({label,containerClassName,className, ...props}) => {

    return(
        <CustomContainer className={containerClassName}>
            <label>{label}</label>
            <CustomInput {...props} className="input"  fullWidth/>
        </CustomContainer>
    )
}

export default Input
