import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { Carousel } from "react-responsive-carousel"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
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
    className: "center",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "60px",
    focusOnSelect: true,
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
          <div className=" " key={posters.id}>
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${posters.poster_path})`,
                borderRadius: "16px",
              }}
              className="h-[350px] w-[450px]  "
            ></div>
          </div>
        )
      })}
    </Slider>
  )
}
