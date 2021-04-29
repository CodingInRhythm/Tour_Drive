import './AudioControls.css'
import { useRef } from 'react'

const AudioControls = ({song, idx, setTrackIndex, TrackIndex, setIsPlaying, isPlaying, trackProgress, duration, onScrub, onScrubEnd}) => {
   const handlePlayClick = () => {
     
     
       setIsPlaying(true)
        setTrackIndex(idx) //chanes trackIndex which changes songLink?
   }
   const audioRef = useRef(new Audio(song.songLink))
   let trackInSeconds = audioRef.current.duration

   
   const formatTime = (trackInSeconds) => {
       const h = Math.floor(trackInSeconds / 3600);
       const m = Math.floor((trackInSeconds % 3600) / 60);
       console.log(m)
       const s = (trackInSeconds % 60).toFixed(0);
       return [m, s > 9 ? s : "0" + s]
         .filter((a) => a)
         .join(":");
   }
 let trackLength = formatTime(trackInSeconds)

   console.log(audioRef)
    return (
      <div className="audio-controls">
        {isPlaying && idx === TrackIndex ? (
          <button
            type="button"
            className="pause"
            onClick={() => setIsPlaying(false)}
            aria-label="Pause"
          >
            <i class="fas fa-pause"></i>
          </button>
        ) : (
          <button
            type="button"
            className="play"
            onClick={() => handlePlayClick()}
            aria-label="Play"
          >
            <i class="fas fa-play"></i>
          </button>
        )}
        <p>{idx + 1}</p>
        <p>{song.name}</p>
        <p>{trackLength}</p>
        
        {/* <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
        /> */}
      </div>
    );    
}

export default AudioControls