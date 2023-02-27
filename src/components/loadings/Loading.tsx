import React, { Fragment } from "react";
import ContentLoader from "react-content-loader";
interface amountProp {
  amount: number;
}
export function Loading({ amount }: amountProp) {
  return (
    <div className="m-0 flex flex-row p-0">
      {Array.from({ length: amount }).map((_, index) => {
        return (
          <Fragment key={index}>
            <ContentLoader
              width={100}
              height={100}
              backgroundColor="#000"
              foregroundColor="#ecebeb"
            >
              <circle cx="46" cy="38" r="38" />
              <rect x="34" y="83" rx="5" ry="5" width="25" height="10" />
            </ContentLoader>
          </Fragment>
        );
      })}
    </div>
  );
}
