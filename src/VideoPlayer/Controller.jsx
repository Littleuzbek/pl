import React from 'react'

export default function controller({pausePlayVal, onPlay, onPause}) {
  return (
    <div className="controllers">
    {pausePlayVal ? (  
      <button onClick={() => onPlay()}>play</button>
    ) : (
      <button onClick={() => onPause()}>pause</button>
    )}
  </div>
  )
}
