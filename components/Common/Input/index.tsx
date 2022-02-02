import * as React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  TextField,
  Box,
  styled,
  TextFieldProps,
  Theme,
  useTheme,
  StyledComponentProps,
  BoxProps,
  InputAdornment,
  IconButton,
} from "@mui/material";
import clsx from "clsx";


/**
 * Input interface
 * 
 * 
 */
interface InputProps {
  label: string;
  containerClassName?: string;
}
interface IBox extends StyledComponentProps {
  className?: string;
  theme: Theme;
}

/**
 * Styles applied to TextField
 */
const CustomInput = styled(TextField)((props) => ({
    // 
  }));

/**
 * Styles apply to TextField & it's Wrapper
 * @target label
 * @target .MuiOutliedIput-root   : @ref Mui TextField doc
 * @param theme 
 */

const StyledInputWrapper = styled(Box)(
  ({ theme, ...props }: BoxProps & IBox) => ({
    display: "flex",
    flexDirection: "column",
    color: "#161616",
    "& label": {
      fontSize: "16px",
      lineHeight:"19.36px"
    },
    "& .MuiOutlinedInput-root": {
      height: "50px",
      borderRadius: "26px",
      backgroundColor: theme.palette.grey[400],
      "& fieldset": {
        borderColor: "#94A3B8",
      },
      "&:hover": {
        background: "rgba(240, 234, 246, 0.3)",
        "& fieldset": {
          borderColor: theme.palette.primary.main,
        },
      },
    },
  })
);

/**
 * Exportable Input Component
 * 
 */
const Input: React.FC<InputProps & TextFieldProps> = ({
  label,
  containerClassName,
  className,
  type,
  ...props
}) => {
  const theme = useTheme();
  const [textType, setTextType] = React.useState<string>(type || 'text');
  return (
    <StyledInputWrapper className={containerClassName} theme={theme}>
      <label>{label}</label>
      <CustomInput
        {...props}
        className={clsx(className)}
        fullWidth
        type={textType}
        InputProps={{
          endAdornment: type === "password" ? (
            <InputAdornment position="end">
              <IconButton color="primary" onClick={()=>textType==="password" ? setTextType("text") : setTextType("password")}>
                {textType === "password" ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ) : null,
        }}
      />
    </StyledInputWrapper>
  );
};

export default Input;
