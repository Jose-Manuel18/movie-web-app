import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";

import {
  BigPoster,
  Button,
  Description,
  MoviesList,
  TopCast,
  VideoPlayer,
} from "@/components";
import { MoviesProps, videoProps } from "../";

import { useState } from "react";
import { Modal } from "@/components/Modal";
import Custom500 from "../500";

interface Props {
  movie?: MoviesProps;
  video?: videoProps;
  error: boolean;
}

export default function MoviePage({ movie, video, error }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  if (error) {
    return <Custom500 />;
  }

  return (
    <>
      <BigPoster isOpen={isOpen} path={movie && movie.backdrop_path}>
        <Description
          title={movie?.title}
          overview={movie?.overview}
          movieId={movie?.id}
          rating={movie?.vote_average}
          voteCount={movie?.vote_count}
        />

        <TopCast movie_id={movie?.id} />

        <MoviesList />

        <Button onClick={() => setIsOpen(!isOpen)}>Watch trailer</Button>
        <div className="absolute">
          <Modal
            Open={isOpen}
            toggleClose={() => {
              setIsOpen(!isOpen);
              const modal = document.getElementById("modal");
              if (modal) {
                modal.removeAttribute("open");
              }
            }}
          >
            <VideoPlayer videos={video} />
          </Modal>
        </div>
      </BigPoster>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // fetch movie data from API
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&language=en-US&page=1`,
  );

  const paths = data?.results?.map((movie: MoviesProps) => ({
    params: { id: movie.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  // fetch movie data from API using the id from the URL
  const { id } = params ?? {};

  try {
    const [result, videoKey] = await Promise.all([
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&language=en-US`,
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&language=en-US`,
      ),
    ]);

    const trailer = videoKey.data.results.find(
      (video: videoProps) => video.type === "Trailer",
    );

    return {
      props: { movie: result.data, video: trailer || null, error: false },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { movie: undefined, video: null || undefined, error: true },
    };
  }
};
