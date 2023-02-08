import { useQuery } from "@tanstack/react-query"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Carousel } from "flowbite"
interface MovieData {
  results: MoviesProps[]
}
export interface MoviesProps {
  adult?: boolean
  backdrop_path?: string
  genre_ids?: number[]
  id?: number
  original_language?: string
  original_title?: string
  overview?: string
  poster_path?: string
  release_date?: string
  title?: string
  video?: boolean
  vote_count?: number
}
export default function SlideShow() {
  const settings = {
    className: "center ",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    centerMode: true,

    focusOnSelect: true,
    centerPadding: "60px",
    speed: 500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const { isLoading, error, data } = useQuery<MovieData>(
    ["popularMovies"],
    () =>
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&languages=en-US`,
      ).then((res) => res.json()),
  )

  if (error || isLoading) return null

  return (
    <Slider {...settings}>
      {data?.results.map((posters: MoviesProps) => {
        return (
          <div
            className=" hover:bg-white/10 hover:backdrop-blur-[2px]   bg-cover h-[400px] w-[200px] m-10 "
            key={posters.id}
          >
            <div
              className="    rounded-2xl"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${posters.poster_path})`,
              }}
            >
              <div className="hover:backdrop-blur-xl hover:backdrop-filter w-full h-full">
                <div
                  className="bg-cover h-[300px] w-[200px] rounded-2xl "
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${posters.poster_path})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        )
      })}
    </Slider>

    // <div
    //   style={{
    //     height: 200,
    //     width: 300,
    //     backgroundPosition: "cover",
    //     backgroundImage:
    //       "url(https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80)",
    //   }}
    // >
    //   <div
    //     style={{
    //       height: 100,
    //       width: 200,
    //       border: '1px solid black',
    //       backgroundPosition: "cover",
    //       backgroundImage:
    //         "url(https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80)",
    //     }}
    //   ></div>
    // </div>
  )
}
