import PropTypes from "prop-types";
import { Title } from "./styles";

export function PrimaryTitle({ children, ...props}) {
  return <Title {...props}>{children}</Title>;
}
PrimaryTitle.PropTypes = {
  children: PropTypes.node.isRequired,
};
export default PrimaryTitle;
