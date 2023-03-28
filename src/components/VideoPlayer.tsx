import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import ReactPlayer from "react-player";
import { AnimatedCircleLoader } from "./loadings/AnimatedCircleLoader";

import { NoTrailer } from "./NoTrailer";

interface Video {
  id: string;
  key: string;
  type: string;
}

interface VideoPlayerProps {
  videos?: Video;
}

export function VideoPlayer({ videos }: VideoPlayerProps) {
  const [isReady, setIsReady] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [width, setWidth] = useState<number>(640);
  const [height, setHeight] = useState<number>(390);

  useLayoutEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let newWidth = 640;
      let newHeight = 390;

      if (windowWidth >= 1440) {
        newWidth = 640;
        newHeight = 390;
      } else if (windowWidth >= 976) {
        newWidth = 640;
        newHeight = 390;
      } else if (windowWidth >= 768) {
        newWidth = 640;
        newHeight = 390;
      } else {
        newWidth = windowWidth - 40;
        newHeight = Math.round((newWidth / 16) * 9);
      }

      setWidth(newWidth);
      setHeight(newHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsReady(true);
      setShowPlayer(true);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (!videos) {
    return <NoTrailer message="No trailer for this movie" />;
  }

  return (
    <div className="flex items-center justify-center">
      {!isReady ? (
        <AnimatedCircleLoader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: showPlayer ? 1 : 0,
            transition: { duration: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ opacity: showPlayer ? 1 : 0 }}
        >
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videos.key}`}
            width={width}
            height={height}
            controls={true}
          />
        </motion.div>
      )}
    </div>
  );
}
