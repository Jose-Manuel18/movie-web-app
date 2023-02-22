/* eslint-disable @next/next/no-img-element */
import { Skeleton, Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";

import { LoadingCast } from "./loadings/LoadingCast";
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

  const amount = data && data.cast ? data.cast.length : 10;
  console.log(amount);

  if (error) return null;

  if (isLoading) return <LoadingCast amount={10} />;

  return (
    <div className="lg:order-last ">
      <h1 className="text-white  text-lg font-medium px-4  ">Cast</h1>

      <div className="flex flex-nowrap overflow-x-auto ">
        {data?.cast?.map((items, index) => {
          return (
            <div
              key={index}
              className="flex flex-col px-2 items-center animate__animated animate__fadeIn"
            >
              <Image
                className="rounded-full max-h-[60px] min-h-[60px] min-w-[60px] object-cover "
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

              <div className="text-white text-[12px] text-center">
                {items.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
