const AudioControls = ({idx, setTrackIndex, TrackIndex, onPlayPauseClick, isPlaying}) => {
   const handlePlayClick = () => {
       console.log('inside??')
       onPlayPauseClick(true)
        setTrackIndex(idx)
   }

    return (
        <div className="audio-controls"> 
        {isPlaying && idx === TrackIndex? (
            <button
            type="button"
            className="pause"
            onClick={() => onPlayPauseClick(false)}
            aria-label="Pause"
        > STOP
                </button>
    ) : (
        <button
        type="button"
        className="play"
        onClick={() => handlePlayClick()}
        aria-label="Play"
         >
        play
         </button>
    )}
      </div>
    )    
}

export default AudioControls