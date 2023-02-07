import { Icon, SlideShow } from "@/components/index"
import { HamburgerIcon } from "@chakra-ui/icons"
import { Avatar } from "@chakra-ui/react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

export default function Home() {
  return (
    <div className="flex bg-backgroundColor  flex-col ">
      <div className="flex flex-row mb-12">
        <Avatar src="https://bit.ly/tioluwani-kolawole" />

        <Icon
          boxSize={6}
          color="white"
          as={HamburgerIcon}
          onClick={() => console.log("clicked")}
          Blur
        />
      </div>
      <SlideShow />

      <div className="flex flex-row">
        <div className="text-white">Movies</div>
        <div className="ml-auto text-gray-700">View all</div>
      </div>
    </div>
  )
}
