import { useState } from "react";
import Image from "next/image";

import warhaus from "../../public/images/warhaus.svg";
import play from "../../public/images/play.svg";
import pause from "../../public/images/pause.svg";

export function Player() {
  const [playing, setPlaying] = useState(false);

  const playPause = async () => {
    try {
      const audio = document.querySelector("audio");
      if (!audio) return;
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex w-[366px] items-center gap-2 rounded-2xl border border-white/10 bg-black p-2 text-white">
      <div className="relative">
        <Image priority src={warhaus as string} alt="album of the week" />
        <button
          onClick={() => void playPause()}
          className="absolute top-0 left-0 bottom-0 right-0 flex h-full w-full items-center justify-center duration-300 hover:scale-110"
        >
          {playing ? (
            <Image priority src={pause as string} alt="pause" />
          ) : (
            <Image priority src={play as string} alt="play" />
          )}
        </button>
        <audio src="/audio/warhaus.mp3"></audio>
      </div>
      <p className="text-sm font-medium">{`Warhaus - Love's a Stranger`}</p>
    </div>
  );
}
