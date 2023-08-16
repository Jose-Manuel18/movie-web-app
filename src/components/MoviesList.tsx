import Link from "next/link";
import Image from "next/image";

import { useQuery } from "@tanstack/react-query";

import { motion } from "framer-motion";
import { MovieData, MoviesProps } from "@/pages";
import { SpinningLoader } from "./loadings/SpinningLoader";
import { CSSProperties, PointerEventHandler, useRef, useState } from "react";
import { Carousel } from "./Carousel";

interface MoviesListProps {
  movies?: MoviesProps;
  onClick?: () => void;
  title?: string;
  poster_path?: string;
}

export function MoviesList({ onClick }: MoviesListProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const { isLoading, error, data } = useQuery<MovieData>(
    ["popularMovies"],
    async () =>
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&languages=en-US`,
      ).then((res) => res.json()),
  );
  // const amount = data && data.results ? data.results.length : 10;
  if (error) return null;
  console.log(isDragging);

  return (
    <div>
      <h1 className=" px-4 text-lg font-medium text-white">Movies</h1>
      {/* {isLoading && <SpinningLoader />} */}
      {isLoading ? (
        <SpinningLoader />
      ) : (
        <div
          style={{ cursor: "grab" }}
          className="flex flex-nowrap overflow-x-auto  lg:relative"
          ref={containerRef}
        >
          {data?.results.map((items: MoviesProps, index: number) => {
            return (
              <Link
                onDrag={(e) => {
                  e.preventDefault();
                }}
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
                      onMouseDown={(e) => {
                        if (containerRef.current) {
                          containerRef.current.style.cursor = "grab";
                          setIsDragging(true);
                          setStartX(e.clientX);
                        }
                      }}
                      onMouseUp={() => {
                        if (containerRef.current) {
                          containerRef.current.style.cursor = "grab";
                          setIsDragging(false);
                        }
                      }}
                      onMouseMove={(e) => {
                        if (containerRef.current) {
                          if (!isDragging) return;
                          e.preventDefault();
                          const x = e.clientX;
                          containerRef.current.scrollLeft -= x - startX;
                          setStartX(x);
                        }
                      }}
                      onMouseLeave={() => {
                        if (containerRef.current) {
                          containerRef.current.style.cursor = "grab";
                          setIsDragging(false);
                        }
                      }}
                      className={` ${
                        window.innerWidth >= 976
                          ? `max-h-[100px] min-h-[100px] min-w-[170px] max-w-[170px]`
                          : `max-h-[110px] min-h-[110px] min-w-[75px] max-w-[75px] `
                      }   rounded-md `}
                      src={
                        typeof window !== "undefined" &&
                        window.innerWidth >= 976
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
      )}
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
