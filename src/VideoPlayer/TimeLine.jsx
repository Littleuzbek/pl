import React, { useRef, useState } from "react";

export default function TimeLine({ videoRefVal, pausePlayVal, onPlay }) {
  const [progress, setProgress] = useState();
  const intervalRef = useRef();

  const duration = videoRefVal?.target.duration;

  const minSecond = progress ? Math.round(progress) : "00";
  const minMin = progress ? Math.floor(progress / 60) : "0";
  const maxHours = duration ? Math.floor(duration / 3600) : "";
  const maxMin = duration ? Math.floor(duration / 60) : "";
  const maxSecond = duration ? duration - maxMin * 60 : "";

  intervalRef.current = setInterval(() => {
    if (!pausePlayVal) {
      setProgress(videoRefVal?.target.currentTime);
    }
  }, 1000);

  const changeTime = (value) => {
    clearInterval(intervalRef.current);
    videoRefVal.target.currentTime = value;
    setProgress(videoRefVal.target.currentTime);
  };

  const addZero = (n) => {
    if (n > 60) {
      return n - maxMin * 60 > 9
        ? "" + (n - maxMin * 60)
        : "0" + (n - maxMin * 60);
    } else {
      return n > 9 ? "" + n : "0" + n;
    }
  };

  return (
    <div className="timeLine">
      {minSecond ? (
        <p>
          {minMin}:{addZero(Math.round(minSecond))}
        </p>
      ) : (
        ""
      )}
      <input
        type="range"
        value={
          videoRefVal?.target.currentTime ? videoRefVal?.target.currentTime : 0
        }
        min={0}
        max={duration ? duration : 0}
        onChange={(e) => {
          changeTime(e.target.value);
        }}
        // onTouchMove={
        //   (e) => {
        //     changeTime(e.target.value);
        //   }}
        onMouseUp={() => onPlay()}
      />
      {maxMin ? (
        <p>
          {maxHours >= 1 ? maxHours : ""}
          {maxMin}:{addZero(Math.round(maxSecond))}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
