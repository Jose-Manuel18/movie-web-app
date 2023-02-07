import { Icon } from "@chakra-ui/icons"
import { ComponentWithAs, IconProps, ImgProps } from "@chakra-ui/react"
interface IconButtonProps {
  Blur?: boolean
  viewBox?: string
  boxSize?: number
  color?: string
  focusable?: boolean
  children?: React.ReactNode
  as: ComponentWithAs<"svg">
  onClick?: () => void
}
const IconButton: React.FC<IconButtonProps> = ({ Blur, ...props }) => {
  return (
    <div
      className={`flex bg-${
        !Blur ? "black border border-gray-500" : "white/30"
      } ml-auto rounded-2xl backdrop-blur-sm w-12 h-12 items-center justify-center`}
    >
      <Icon {...props} />
    </div>
  )
}

export default IconButton
