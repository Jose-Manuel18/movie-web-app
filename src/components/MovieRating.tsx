import { HeartOutlined, ShareAltOutlined, StarFilled } from "@ant-design/icons";
import { IconButton } from "./index";
interface RatingProps {
  rating?: number;
  voteCount?: number;
}
export const MovieRating = ({ rating, voteCount }: RatingProps) => {
  return (
    <div className="flex items-center  ">
      <div className="flex space-x-2">
        <div className="flex items-center justify-center space-x-1">
          <IconButton
            style={{ color: "white", paddingBottom: 6 }}
            component={StarFilled}
          />
        </div>
        <div className="flex flex-row">
          <p className="mr-1 text-sm font-bold text-white">{`${rating} `}</p>
          <p className="text-sm text-description"> {`| ${voteCount}`}</p>
        </div>
      </div>
      <div className="ml-auto flex space-x-4">
        <IconButton style={{ color: "white" }} component={HeartOutlined} />
        <IconButton style={{ color: "white" }} component={ShareAltOutlined} />
        <IconButton style={{ color: "white" }} component={HeartOutlined} />
      </div>
    </div>
  );
};
