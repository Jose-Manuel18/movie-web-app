import { Fragment } from "react";
import ContentLoader from "react-content-loader";

export const LoadingMovieList = ({ amount }: { amount: number }) => {
  return (
    <div className="flex flex-row">
      {Array.from({ length: amount }).map((_, index) => {
        return (
          <Fragment key={index}>
            <ContentLoader
              width={100}
              height={100}
              backgroundColor="#000"
              foregroundColor="#ecebeb"
            >
              <rect x="12" y="10" rx="5" ry="5" width="75" height="100" />
              <rect x="42" y="120" rx="5" ry="5" width="25" height="10" />
            </ContentLoader>
          </Fragment>
        );
      })}
    </div>
  );
};
