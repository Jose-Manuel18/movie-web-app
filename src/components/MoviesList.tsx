import Link from "next/link";
import Image from "next/image";

import { MovieData, MoviesProps } from "@/State/Movies";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "./loadings/Loading";
import { LoadingMovieList } from "./loadings/LoadingMovieList";

interface MoviesListProps {
  movies?: MoviesProps;
  onClick?: () => void;
  title?: string;
  poster_path?: string;
}
export function MoviesList({
  onClick,
  movies,
  title,
  poster_path,
}: MoviesListProps) {
  const { isLoading, error, data } = useQuery<MovieData>(
    ["popularMovies"],
    async () =>
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&languages=en-US`,
      ).then((res) => res.json()),
  );
  const amount = data && data.results ? data.results.length : 10;
  if (error) return null;
  if (isLoading) return <LoadingMovieList amount={amount} />;

  return (
    <div className="lg:mb-5">
      <h1 className="text-white text-lg font-medium px-4">Movies</h1>
      <div className="flex flex-nowrap overflow-x-auto">
        {data?.results.map((items: MoviesProps) => {
          return (
            <Link
              key={items.id}
              href={{
                pathname: `/Movies/[id]`,
                query: {
                  id: items.id,
                },
              }}
            >
              <div
                className="flex flex-col p-2 items-center justify-center animate__animated animate__fadeIn"
                onClick={onClick}
              >
                <Image
                  className={` ${
                    window.innerWidth >= 976
                      ? `min-w-[170px] min-h-[100px] max-w-[170px] max-h-[100px]`
                      : `min-w-[75px] min-h-[75px] max-w-[75px] max-h-[110px] `
                  }   rounded-md `}
                  alt="Movie props"
                  src={
                    typeof window !== "undefined" && window.innerWidth >= 976
                      ? `https://image.tmdb.org/t/p/original${items.backdrop_path}`
                      : `https://image.tmdb.org/t/p/original${items.poster_path}`
                  }
                  width={75}
                  height={100}
                  loading="lazy"
                />
                <div className="flex  justify-center w-[100px]">
                  <div className="text-[12px] text-center text-white ">
                    {items.title}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&languages=en-US`,
  );
  const data = await response.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}
