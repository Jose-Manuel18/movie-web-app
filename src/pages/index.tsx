/* eslint-disable react/no-unescaped-entities */
import { BigPoster, Button } from "@/components/index";

import { MoviesList } from "@/components/MoviesList";

import { TopCast } from "@/components/TopCast";
import { Description } from "@/components/Description";

export interface CreditsProps {
  id?: number;
  cast?: CastProps[];
}
export interface CastProps {
  id: number;
  name: string;
  profile_path: string;
  order: number;
  credit_id: string;
  cast_id: number;
}
export interface MoviesProps {
  adult?: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
export interface MovieData {
  results: MoviesProps[];
}
export interface videoProps {
  id: string;
  key: string;
  type: string;
}
export interface VideoData {
  results: videoProps[];
}
export default function Home() {
  const movies = {
    id: 505642,
    title: "Black Panther: Wakanda Forever",
    poster_path: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    overview:
      "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    vote_average: 7.5,
    vote_count: 3132,
  };

  return (
    <BigPoster path={movies.poster_path}>
      <Description
        movieId={movies.id}
        title={movies.title}
        overview={movies.overview}
        rating={movies.vote_average}
        voteCount={movies.vote_count}
      />

      <TopCast movie_id={movies.id} />
      <MoviesList />

      <Button>Watch Trailer</Button>
    </BigPoster>
  );
}
