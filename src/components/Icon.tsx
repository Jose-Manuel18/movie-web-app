import Icon from "@ant-design/icons";

import { CSSProperties } from "react";

interface IconButtonProps {
  component?: React.ForwardRefExoticComponent<any>;
  rotate?: number;
  spin?: boolean;
  style?: CSSProperties;
}
export const IconButton: React.FC<IconButtonProps> = ({ ...props }) => {
  return <Icon {...props} />;
};
