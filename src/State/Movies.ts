import { selector } from "recoil";

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
export const PopularMovies = selector({
  key: "PopularMovies",
  get: async () => {
    return await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_KEY}&languages=en-US`,
    ).then((res) => res.json());
  },
});
