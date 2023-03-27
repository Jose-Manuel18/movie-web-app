/* eslint-disable @next/next/no-img-element */

import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Image from "next/image";

import { SpinningLoader } from "./loadings/SpinningLoader";

export interface TopCastProps {
  cast?: CastProps[];
  movie_id?: number;
}
export interface CastProps {
  id: number;
  name: string;
  profile_path: string;
  order: number;
  credit_id: string;
  cast_id: number;
}
export function TopCast({ movie_id }: TopCastProps) {
  const { isLoading, error, data } = useQuery<TopCastProps>(
    ["movieCredits", movie_id],
    async () =>
      await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&languages=en-US`,
      ).then((res) => res.json()),
  );

  // const amount = data && data.cast ? data.cast.length : 10;
  // console.log(amount);

  if (error) return null;

  // if (isLoading)
  //   return <div className="min-h=[100px] max-h-[100px] bg-notGreen"></div>;

  return (
    <div className=" lg:relative lg:order-last lg:max-h-[200px] lg:min-h-[200px]">
      <h1 className="px-4 text-lg font-medium text-white ">Cast</h1>
      {isLoading && <SpinningLoader />}
      <div className="flex  flex-nowrap overflow-x-auto">
        {data?.cast?.map((items, index) => {
          return (
            <motion.div
              layout
              whileHover={{ scale: 1.05 }}
              key={index}
              className="mt-2 cursor-pointer"
              whileTap={{ scale: 0.95 }}
            >
              <div className=" flex flex-col items-center px-2">
                <Image
                  className="max-h-[60px] min-h-[60px] min-w-[60px] rounded-full object-cover "
                  src={
                    items.profile_path === null
                      ? "https://i.stack.imgur.com/l60Hf.png"
                      : `https://image.tmdb.org/t/p/original${items.profile_path}`
                  }
                  alt="Cast Photo"
                  width={60}
                  height={60}
                  loading="lazy"
                />

                <div className="text-center text-[12px] text-white">
                  {items.name}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
