import { useEffect, useState } from "react";
interface ReadMoreProps {
  text?: string;
  limit: number;
}
const ReadMore: React.FC<ReadMoreProps> = ({ text, limit }) => {
  const [expanded, setExpanded] = useState(false);
  const [truncatedText, setTruncatedText] = useState(
    text ? text.slice(0, limit) + "..." : "",
  );

  useEffect(() => {
    setTruncatedText(text ? text.slice(0, limit) + "..." : "");
  }, [text, limit]);

  return (
    <p className="text-sm leading-relaxed text-description">
      {expanded ? text || "" : truncatedText}
      <button
        className="font-medium text-[#797b8a] hover:text-primary-600 "
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? " Read less" : " Read more"}
      </button>
    </p>
  );
};

export default ReadMore;
