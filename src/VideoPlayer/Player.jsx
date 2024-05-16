import React, {  useState } from "react";
import bitch from '../bitch.mp4';
import Controllers from './Controller';
import TimeLine from "./TimeLine";

export default function Player() {
  const [videoRef, setVideoRef] = useState();
  const [pausePlay, setPausePlay] = useState(false);

  const Play = () => {
    videoRef?.target.play();
    setPausePlay(false);
  };

  const Pause = () => {
    setPausePlay(true);
    videoRef?.target.pause();
  };
  
  const GetRef = (e) => {
    setVideoRef(e);
  };

  return (
    <div className="playeR">
      <video src={bitch} autoPlay onLoadedData={(e) => GetRef(e)}></video>
      <div className="controlRoom">
        <Controllers onPlay={Play} onPause={Pause} pausePlayVal={pausePlay} />
        <TimeLine videoRefVal={videoRef} onPlay={Play} pausePlayVal={pausePlay}/>
      </div>
    </div>
  );
}
