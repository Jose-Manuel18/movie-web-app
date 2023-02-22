// import { Icon } from "@chakra-ui/icons"

import Icon from "@ant-design/icons";

import { CSSProperties } from "react";

interface IconButtonProps {
  component?: React.ForwardRefExoticComponent<any>;
  rotate?: number;
  spin?: boolean;
  style?: CSSProperties;
}
const IconButton: React.FC<IconButtonProps> = ({ ...props }) => {
  return <Icon {...props} />;
};

export default IconButton;
