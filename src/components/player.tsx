import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import play from "../../public/images/play.svg";
import pause from "../../public/images/pause.svg";
import skip from "../../public/images/skip.svg";

import { Playlist } from "../util/playlist";

export function Player() {
  const [playing, setPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null | any>();
  const [currentSong, setCurrentSong] = useState(Playlist[0]);

  const playPause = async () => {
    try {
      const audio: HTMLAudioElement | null = audioRef?.current;
      if (!audio) return;
      if (playing) {
        console.log("pausing");
        audio.pause();
        setPlaying(false);
      } else {
        console.log("playing");
        await audio.play();
        setPlaying(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const nextSong = () => {
    const currentSongIndex = Playlist.findIndex(
      (song) => song.name === currentSong?.name
    );
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= Playlist.length) {
      setCurrentSong(Playlist[0]);
    } else {
      setCurrentSong(Playlist[nextSongIndex]);
    }
    if (playing) {
      setTimeout(() => {
        audioRef.current.play();
      }, 1000);
    }
  };

  useEffect(() => {
    if (playing) {
      audioRef.current.autoplay = true;
      document.title = `${currentSong!.name} - ${currentSong!.artist}`;
    }
  }, [playing, currentSong]);

  useEffect(() => {
    audioRef.current.addEventListener("ended", () => {
      nextSong();
      setTimeout(() => {
        audioRef.current.play();
      }, 1000);
    });
  }, [currentSong, audioRef]);

  return (
    <div className="flex w-[366px] items-center justify-between gap-2 rounded-2xl border border-white/10 bg-black p-2 text-white">
      <div className="flex items-center justify-start gap-2 px-1 py-1">
        <Image
          priority
          src={currentSong!.cover}
          alt="album of the week"
          width={36}
          height={36}
          className="rounded-md shadow shadow-white/10"
        />
        <audio ref={audioRef} src={currentSong!.song}></audio>
        <p className="text-sm">{currentSong!.name}</p>
      </div>
      <div className="flex items-center justify-start">
        <button
          onClick={() => void playPause()}
          className="flex h-full items-center justify-center px-2 py-1 duration-300 rounded-md hover:scale-125 hover:bg-zinc-900"
        >
          {playing ? (
            <Image priority src={pause as string} alt="pause" />
          ) : (
            <Image priority src={play as string} alt="play" />
          )}
        </button>
        <button
          onClick={() => void nextSong()}
          className="flex h-full items-center justify-center px-2 py-1 duration-300 rounded-md hover:scale-125 hover:bg-zinc-900"
        >
          <Image priority src={skip as string} alt="skip" />
        </button>
      </div>
    </div>
  );
}
