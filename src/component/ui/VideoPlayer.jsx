import { useRef, useState } from "react";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="video-wrapper">
      <video
        ref={videoRef}
        src="/assets/videos/itoya.mp4"
        className="video"
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      {!isPlaying && (
        <button className="play-btn" onClick={handlePlay}>
          ▶
        </button>
      )}
    </div>
  );
}