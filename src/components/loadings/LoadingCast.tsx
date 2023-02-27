import ContentLoader from "react-content-loader";

export const LoadingCast = ({ amount }: { amount: number }) => {
  return (
    <div className="flex flex-nowrap overflow-x-auto">
      {Array.from({ length: amount }).map((_, index) => {
        return (
          <div key={index} className="mt-2 cursor-pointer">
            <div className=" flex flex-col items-center px-2">
              <ContentLoader
                width={60}
                height={60}
                style={{ marginBottom: "5px" }}
                backgroundColor="#202837"
                foregroundColor="#1a2230"
              >
                <circle cx="30" cy="30" r="30" />
              </ContentLoader>
              <div className=" text-center text-[12px] text-white">
                <ContentLoader
                  width={40}
                  height={10}
                  backgroundColor="#202837"
                  foregroundColor="#1a2230"
                >
                  <rect x="0" y="0" rx="5" ry="5" width="40" height="10" />
                </ContentLoader>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
