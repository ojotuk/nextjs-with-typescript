import {
  Button,
  ButtonProps,
  styled,
} from "@mui/material";
import theme from "../../../utils/theme";


/**
 * Styles override applied to CustomComponent
 */
const StyledButton = styled(Button)((props: ButtonProps) => ({
  borderRadius: "26px",
  textTransform: "none",
  "&:disabled":{
      backgroundColor: theme.palette.primary.light,
      color: "#f3f3f3"
  }
}));

const CustomButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
      <StyledButton {...props} >{children}</StyledButton>
  );
};

export default CustomButton;
