import React from "react";
import { styled, Box, StyledComponentProps, Theme} from "@mui/material"
import theme from "../../../utils/theme";
import { BoxProps } from "@mui/system";



interface IBox extends StyledComponentProps{
    className?:string,
    theme:Theme,
}

export const InputWrapper = styled(Box)((props:BoxProps & IBox)=>({
    display:"flex",
    flexDirection:"column",
    color:props.theme.palette.error.main,
    "& .input" : {
        width:"330px"
    }
})

)