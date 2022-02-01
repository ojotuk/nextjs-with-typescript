import { TextField, Box, styled, TextFieldProps, Theme, useTheme , StyledComponentProps, BoxProps} from "@mui/material";
import clsx from "clsx"



const CustomInput = styled(TextField)((props)=>({
    // other styles may apply here
}))
interface InputProps {
    label:string;
    containerClassName?:string
}
interface IBox extends StyledComponentProps {
    className?: string,
    theme: Theme,
}

const StyledInputWrapper = styled(Box)(({theme,...props}: BoxProps & IBox)=>({
    display: "flex",
    flexDirection: "column",
    color: "#161616",
    "& label": {
        fontSize: "16px"
    },
    "& .MuiOutlinedInput-root" : {
        height: "50px",
        borderRadius: "26px",
        backgroundColor: theme.palette.grey[400],
        "& fieldset": {
            borderColor: "#94A3B8"
        },
        "&:hover":{
            background: "rgba(240, 234, 246, 0.3)",
            "& fieldset": {
                borderColor: theme.palette.primary.main
            }
        }
    }
})

)


const Input: React.FC<InputProps & TextFieldProps> = ({label,containerClassName,className, ...props}) => {
   const theme=useTheme()
    return(
        <StyledInputWrapper className={containerClassName} theme={theme}>
            <label>{label}</label>
            <CustomInput {...props} className={clsx(className)}  fullWidth/>
        </StyledInputWrapper>
    )
}

export default Input