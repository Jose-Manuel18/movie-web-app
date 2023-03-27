import { useLayoutEffect, useState } from "react";
import YouTube from "react-youtube";
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
  const [width, setWidth] = useState<number>(640);
  const [height, setHeight] = useState<number>(390);

  useLayoutEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let newWidth = 640;
      let newHeight = 390;

      if (windowWidth >= 1440) {
        newWidth = 1280;
        newHeight = 720;
      } else if (windowWidth >= 976) {
        newWidth = 896;
        newHeight = 504;
      } else if (windowWidth >= 768) {
        newWidth = 704;
        newHeight = 396;
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

  if (!videos) {
    return <NoTrailer message="No trailer for this movie" />;
  }

  return (
    <div>
      <YouTube
        loading="eager"
        key={videos.id}
        videoId={videos.key}
        opts={{ height, width, playerVars: { autoplay: 0 } }}
        className="sm:h-auto sm:w-full"
      />
    </div>
  );
}
