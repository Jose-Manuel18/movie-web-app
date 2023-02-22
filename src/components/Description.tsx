import { MoviesProps } from "@/State/Movies";
import { useQuery } from "@tanstack/react-query";
import ReadMore from "@/components/ReadMore";
import { MovieRating } from "./MovieRating";

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
  );
  const release_date = data?.release_date;
  const date = release_date ? new Date(release_date) : undefined;
  const year = date ? date.getFullYear() : "";

  if (error) return null;
  return (
    <div className="flex flex-col m-5 animate__animated animate__fadeIn">
      <p className="text-white font-bold pb-2 text-lg lg:text-5xl">{title}</p>
      <div className="lg:flex lg:flex-col lg:pb-3">
        <div className=" lg:order-1">
          <MovieRating rating={rating} voteCount={voteCount} />
        </div>
        <p className="text-description text-sm  lg:order-3">
          {data?.runtime
            ? `${Math.floor(data.runtime / 60)}h ${data.runtime % 60}m ⦁ ` +
              `${(data?.genres || [])
                .map((genre) => genre.name)
                .join(", ")} ⦁ ` +
              `${year}`
            : ""}
        </p>
        <div className=" lg:order-4">
          <ReadMore limit={140} text={overview} />
        </div>
      </div>
    </div>
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
export async function getStaticProps({ params }: { params: Props }) {
  const movieId = params;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&languages=en-US`,
  );
  const data = await response.json();

  return {
    props: {
      data,
      movieId,
    },
  };
}
