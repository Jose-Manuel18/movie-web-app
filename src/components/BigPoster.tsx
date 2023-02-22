import Image from "next/image";
import { useEffect, useState } from "react";
interface BigPosterProps {
  path: string;
  children: React.ReactNode;
  isReady: boolean;
}

export const BigPoster: React.FC<BigPosterProps> = ({
  isReady,
  path,
  children,
}) => {
  return (
    <div className="min-h-screen max-h-screen relative transition-opacity bg-backgroundColor animate__animated animate__fadeIn animate__delay-1s">
      {/* Background image */}
      <div className="relative ">
        <Image
          className={`min-w-full max-w-full min-h-[225px] lg:min-h-screen object-cover `}
          alt="Posters"
          src={`https://image.tmdb.org/t/p/original${path}`}
          width={700}
          height={225}
          quality={100}
        />
        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-backgroundColor h-[80px] lg:h-[900px] w-full" />
      </div>

      {/* Content */}
      <div className=" lg:absolute bottom-0 left-0 right-0 lg:grid lg:grid-cols-2">
        {children}
      </div>
    </div>
  );
};
