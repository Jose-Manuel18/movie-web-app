import Link from "next/link";
import Image from "next/image";

import { useQuery } from "@tanstack/react-query";

import { motion } from "framer-motion";
import { MovieData, MoviesProps } from "@/pages";
import { SpinningLoader } from "./loadings/SpinningLoader";

interface MoviesListProps {
  movies?: MoviesProps;
  onClick?: () => void;
  title?: string;
  poster_path?: string;
}

export function MoviesList({ onClick }: MoviesListProps) {
  const { isLoading, error, data } = useQuery<MovieData>(
    ["popularMovies"],
    async () =>
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&languages=en-US`,
      ).then((res) => res.json()),
  );
  // const amount = data && data.results ? data.results.length : 10;
  if (error) return null;

  return (
    <div>
      <h1 className=" px-4 text-lg font-medium text-white">Movies</h1>
      {isLoading && <SpinningLoader />}
      <div className="flex flex-nowrap overflow-x-auto  lg:relative">
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
              <motion.div
                layout
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0.5 }}
              >
                <div
                  className=" flex flex-col items-center justify-center p-2"
                  onClick={onClick}
                >
                  <Image
                    className={` ${
                      window.innerWidth >= 976
                        ? `max-h-[100px] min-h-[100px] min-w-[170px] max-w-[170px]`
                        : `max-h-[110px] min-h-[110px] min-w-[75px] max-w-[75px] `
                    }   rounded-md `}
                    src={
                      typeof window !== "undefined" && window.innerWidth >= 976
                        ? `https://image.tmdb.org/t/p/original${items.backdrop_path}`
                        : `https://image.tmdb.org/t/p/original${items.poster_path}`
                    }
                    alt="Movie props"
                    width={75}
                    height={110}
                  />
                  <div className="flex  w-[100px] justify-center">
                    <div className="text-center text-[12px] text-white ">
                      {items.title}
                    </div>
                  </div>
                </div>
              </motion.div>
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
