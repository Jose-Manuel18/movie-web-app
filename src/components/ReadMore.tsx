import { useDescriptionContext } from "@/context/DescriptionContext";
import { useEffect, useState } from "react";
interface ReadMoreProps {
  text?: string;
  limit: number;
}
export const ReadMore = ({ text, limit }: ReadMoreProps) => {
  const [expanded, setExpanded] = useState(false);
  const { setIsTruncated } = useDescriptionContext();
  const [truncatedText, setTruncatedText] = useState(
    text ? text.slice(0, limit) + "..." : "",
  );

  useEffect(() => {
    setTruncatedText(text ? text.slice(0, limit) + "..." : "");
  }, [text, limit]);

  return (
    <div className="">
      <p className="text-sm leading-relaxed text-description">
        {expanded ? text?.slice(0, 500) || "" : truncatedText}
        <button
          className="hover:text-primary-600 font-medium text-[#797b8a] "
          onClick={() => {
            setExpanded(!expanded);
            setIsTruncated(!expanded);
          }}
        >
          {expanded ? " Read less" : " Read more"}
        </button>
      </p>
    </div>
  );
};
