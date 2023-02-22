import { HeartOutlined, ShareAltOutlined, StarFilled } from "@ant-design/icons";
import Icon from "./Icon";
interface RatingProps {
  rating?: number;
  voteCount?: number;
}
export const MovieRating = ({ rating, voteCount }: RatingProps) => {
  return (
    <div className="flex items-center  ">
      <div className="flex space-x-2">
        <div className="flex items-center justify-center space-x-1">
          <Icon
            style={{ color: "white", paddingBottom: 6 }}
            component={StarFilled}
          />
        </div>
        <div className="flex flex-row">
          <p className="text-white text-sm font-bold mr-1">{`${rating} `}</p>
          <p className="text-description text-sm"> {`| ${voteCount}`}</p>
        </div>
      </div>
      <div className="flex ml-auto space-x-4">
        <Icon style={{ color: "white" }} component={HeartOutlined} />
        <Icon style={{ color: "white" }} component={ShareAltOutlined} />
        <Icon style={{ color: "white" }} component={HeartOutlined} />
      </div>
    </div>
  );
};
