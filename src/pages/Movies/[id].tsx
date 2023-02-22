import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { MoviesProps } from "@/State/Movies";
import {
  BigPoster,
  Button,
  Description,
  MoviesList,
  TopCast,
} from "@/components";
import { useRouter } from "next/router";

interface Props {
  movie: MoviesProps;
}

export default function MoviePage({ movie }: Props) {
  const router = useRouter();

  if (router.isReady) {
    console.log("mmg");
  }

  return (
    <>
      <BigPoster isReady={router.isReady} path={movie.backdrop_path}>
        <Description
          title={movie.title}
          overview={movie.overview}
          movieId={movie.id}
          rating={movie.vote_average}
          voteCount={movie.vote_count}
        />
        <TopCast movie_id={movie.id} />
        <MoviesList />
        <Button>Play trailer</Button>
      </BigPoster>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // fetch movie data from API
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&language=en-US&page=1`,
  );

  const paths = data?.results.map((movie: MoviesProps) => ({
    params: { id: movie.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  // fetch movie data from API using the id from the URL
  const { id } = params ?? {};
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&language=en-US`,
  );
  // console.log(result.status);

  return { props: { movie: result.data } };
};
