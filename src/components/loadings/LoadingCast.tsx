import { Fragment } from "react";
import ContentLoader from "react-content-loader";

export const LoadingCast = ({ amount }: { amount: number }) => {
  return (
    <div className="flex flex-row">
      <h1 className="text-white  text-lg font-medium px-4 ">Cast</h1>
      {Array.from({ length: amount }).map((_, index) => {
        return (
          <div key={index}>
            <ContentLoader
              width={100}
              height={100}
              backgroundColor="#253046"
              foregroundColor="#353535"
            >
              <circle cx="46" cy="38" r="30" />
              <rect x="34" y="83" rx="5" ry="5" width="25" height="10" />
            </ContentLoader>
          </div>
        );
      })}
    </div>
  );
};
