const AudioControls = ({idx, setTrackIndex, onPlayPauseClick, isPlaying}) => {
   const handlePlayClick = () => {
       console.log('inside??')
       onPlayPauseClick(true)
        setTrackIndex(idx)
   }

    return (
        <div className="audio-controls"> 
        {isPlaying ? (
            <button
            type="button"
            className="pause"
            onClick={() => onPlayPauseClick(false)}
            aria-label="Pause"
        > PLAY
                </button>
    ) : (
        <button
        type="button"
        className="play"
        onClick={() => handlePlayClick}
        aria-label="Play"
         >
        STOP
         </button>
    )}
      </div>
    )    
}

export default AudioControls