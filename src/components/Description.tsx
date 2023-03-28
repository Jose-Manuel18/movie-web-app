import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { MoviesProps } from "@/pages";
import { ReadMore, SpinningLoader, MovieRating } from ".";

export interface DescriptionProps {
  runtime?: number;
  release_date: string | number | Date;
  genres: GenresProps[];
}
export interface GenresProps {
  id: number;
  name: string;
}
interface Props {
  title?: string;
  overview?: string;
  movieId?: number;
  rating?: number;
  voteCount?: number;
}
export function Description({
  title,
  overview,
  movieId,
  rating,
  voteCount,
}: Props) {
  const { isLoading, error, data } = useQuery<DescriptionProps>(
    ["movieDescription", movieId],
    async () =>
      await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&languages=en-US`,
      ).then((res) => res.json()),
    { staleTime: 1000 },
  );
  const release_date = data?.release_date;
  const date = release_date ? new Date(release_date) : undefined;
  const year = date ? date.getFullYear() : "";

  if (error) return null;
  // if (isLoading) return <div className="min-h-[10px]" />;

  return (
    <>
      {isLoading ? (
        <div className="pt-10">
          <SpinningLoader />
        </div>
      ) : (
        <motion.div
          className="mb-2"
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 0.5, ease: "easeInOut", damping: 10 }}
          initial={{ opacity: 0 }}
          layout
        >
          <div className="m-5 flex flex-col lg:max-h-[200px] lg:min-h-[150px]">
            <p className="pb-2 text-lg font-bold text-white lg:text-5xl">
              {title}
            </p>
            <div className="lg:flex lg:flex-col lg:pb-3">
              <MovieRating rating={rating} voteCount={voteCount} />

              <p className="text-sm text-description">
                {data?.runtime
                  ? `${Math.floor(data.runtime / 60)}h ${
                      data.runtime % 60
                    }m ⦁ ` +
                    `${(data?.genres || [])
                      .map((genre) => genre.name)
                      .join(", ")} ⦁ ` +
                    `${year}`
                  : ""}
              </p>

              <ReadMore limit={120} text={overview} />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&language=en-US&page=1`,
  );
  const data = await response.json();
  const movieIds = data.results.map((movie: MoviesProps) => movie.id);

  return {
    paths: movieIds.map((id: number) => ({
      params: {
        movieId: `${id}`,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({
  params,
}: {
  params: { movieId: Props };
}) {
  const movieId = params.movieId;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&languages=en-US`,
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
