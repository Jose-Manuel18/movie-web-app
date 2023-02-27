import ContentLoader from "react-content-loader";
interface LoadingMovieListProps {
  amount: number;
}
export const LoadingMovieList = ({ amount }: LoadingMovieListProps) => {
  return (
    <div className="flex flex-row ">
      {Array.from({ length: amount }).map((_, index) => {
        return (
          <div
            className="m-2 flex min-w-[180px] max-w-[180px] items-center rounded-lg"
            key={index}
          >
            <ContentLoader
              width={180}
              height={110}
              backgroundColor="#1e2839"
              foregroundColor="#1a2230"
            >
              <rect x="12" y="10" rx="5" ry="5" width="170" height="110" />
              <rect x="42" y="120" rx="5" ry="5" width="25" height="10" />
            </ContentLoader>
          </div>
        );
      })}
    </div>
  );
};
