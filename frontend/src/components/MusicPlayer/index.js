import AudioControls from '../AudioControls'
import { useState, useRef, useEffect } from 'react'
const MusicPlayer = ({tracks}) => {
    //codinginrhythmbucket.s3.amazonaws.com/03+-+Red+Shades.wav
    const [ trackIndex, setTrackIndex ] = useState(0)
    const [ trackProgress, setTrackProgress] = useState(0)
    const [ isPlaying, setIsPlaying ] = useState(false)
   

    const { name, songLink } = tracks[trackIndex];
    
    const audioRef = useRef(new Audio(songLink));
    const intervalRef = useRef();
    const isReady = useRef(false);
    
    //functions

    const startTimer = () => {
	  // Clear any timers already running
	  clearInterval(intervalRef.current);
    

	  intervalRef.current = setInterval(() => {
	    if (audioRef.current.ended) {
	      // toNextTrack();
	    } else {
	      setTrackProgress(audioRef.current.currentTime);
	    }
	  }, [1000]);
  }


    /////////           useEffects


    useEffect(() => {
      console.log('here???useEffect')
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }, [isPlaying]);

    useEffect(() => {
      // Pause and clean up on unmount
      return () => {
        audioRef.current.pause();
        clearInterval(intervalRef.current);
      };
    }, []);

    useEffect(() => {
      audioRef.current.pause();

      audioRef.current = new Audio(songLink);
      setTrackProgress(audioRef.current.currentTime);

      if (isReady.current) {
        audioRef.current.play();
        setIsPlaying(true);
        startTimer();
      } else {
        // Set the isReady ref as true for the next pass
        isReady.current = true;
      }
    }, [trackIndex]);

    const { duration } = audioRef.current;
  
    return (
      <>
        {tracks.map((song, idx) => (
          <div>
            <h2 className="name">{song.name}</h2>
            <AudioControls idx={idx} TrackIndex={trackIndex} setTrackIndex={setTrackIndex} onPlayPauseClick={setIsPlaying} isPlaying={isPlaying}/>
          </div>
        ))}
        {/* <audio controls>
        <source src={songUrl}/>
      </audio> */}
      </>
    );
}


export default MusicPlayer
