"use client";
import { useRef } from "react";
import ReactHlsPlayer from "react-hls-player";

const Player: React.FC = () => {
  const playerRef = useRef<HTMLVideoElement>(null);

  return (
    <ReactHlsPlayer
      playerRef={playerRef}
      src={process.env.NEXT_PUBLIC_STREAMING_URL ?? ""}
      autoPlay={true}
      controls={true}
      width="100%"
      height="100%"
    />
  );
};

export default Player;
