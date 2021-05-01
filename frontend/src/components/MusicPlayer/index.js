import AudioControls from '../AudioControls'
import { useState, useRef, useEffect } from 'react'
const MusicPlayer = ({tracks}) => {
    //codinginrhythmbucket.s3.amazonaws.com/03+-+Red+Shades.wav
    const [ trackIndex, setTrackIndex ] = useState(0)
    // const [ trackProgress, setTrackProgress] = useState(0)
    const [ isPlaying, setIsPlaying ] = useState(false)
   

    const { name, songLink } = tracks[trackIndex];
    
    const audioRef = useRef(new Audio());
    // const audioRef = useRef(new Audio(songLink));
    // const intervalRef = useRef();
    // const isReady = useRef(false);
    
   //trackIndex use Effect
    useEffect(() => {
        console.log('useEffect # 1')
        if (isPlaying) {
        audioRef.current.pause()
        audioRef.current = new Audio()
        // audioRef.current = new Audio(tracks[trackIndex].songLink);
        audioRef.current.play()
        setIsPlaying(true)
        }
        // startTimer()
      }, [trackIndex]);


    useEffect(() => {
   console.log("useEffect # 2");
      if (isPlaying === false) {
        audioRef.current.pause();
        // startTimer()
      } else {
        audioRef.current.play()
      }
    }, [isPlaying]);
    
    return (
      <>
        {tracks.map((song, idx) => (
          <div>
            
            <AudioControls
              song={song}
              idx={idx}
              trackIndex={trackIndex}
              setTrackIndex={setTrackIndex}
              setIsPlaying={setIsPlaying}
              isPlaying={isPlaying}
              // trackProgress={trackProgress}
              // duration={duration}
              // onScrub={onScrub}
              // onScrubEnd={onScrubEnd}
            />
         
          </div>
        ))}
        {/* <audio controls>
        <source src={songUrl}/>
      </audio> */}
      </>
    );
    }
    //functions

    //this function is for a slider which I'm not implementing as MVP
  //   const startTimer = () => {
	//   // Clear any timers already running
	//   clearInterval(intervalRef.current);
    

	//   intervalRef.current = setInterval(() => {
	//     if (audioRef.current.ended) {
	//       // toNextTrack();
	//     } else {
	//       // setTrackProgress(audioRef.current.currentTime);
	//     }
	//   }, [1000]);
  // }

  //scrub is to move slider back and forth, not using yet
  // const onScrub = (value) => {
  //   // Clear any timers already running
  //   clearInterval(intervalRef.current);
  //   audioRef.current.currentTime = value;
  //   // setTrackProgress(audioRef.current.currentTime);
  // };

  //onScrub End is to modify behavior when user stop scrubbing
  // const onScrubEnd = () => {
  //   // If not already playing, start
  //   if (!isPlaying) {
  //     setIsPlaying(true);
  //   }
  //   startTimer();
  // };


    /////////           useEffects

  ///this one basically sees if state is Playing, then plays track

//// 
    // useEffect(() => {
    //   console.log('useEffect 3')
    //   audioRef.current.pause();

    
      
    //   // setTrackProgress(audioRef.current.currentTime);
      
    //   if (isReady.current) {
    //    
    //     audioRef.current.play();
    //     setIsPlaying(true);
    //     // startTimer();
    //   } else {
    //     // Set the isReady ref as true for the next pass
    //     isReady.current = true;
    //   }
    // }, [trackIndex]);

  //trackIndex useEffect


  // //cleans up 
  //   useEffect(() => {
  //     console.log('useEffect 2')
  //     // Pause and clean up on unmount
  //     return () => {
  //       audioRef.current.pause();
  //       // clearInterval(intervalRef.current);
  //     };
  //   }, []);
    // const { duration } = audioRef.current;

export default MusicPlayer
