
# Tour_Drive

Tour Drive is an application that clones the online music retailer Bandcamp and allows fans of artists to 'support' their future tours by adding artists' albums to their collections and follow the artists.  It is written with a React/Redux frontend and a Postgres and Nodebackend using the Sequelize ORM.  

## MVPs


* A responsive music player that allows user to switch between tracks of an album.  Postgres database grabs music from a Cloudinary cloud store. 
* Users can follow/unfollow their favorite artists.
* Users can support the albums theyd like to see their artists tour on and add those albums to the users collection.
* Users can comment on their favorite albums. 
* (STRETCH) Artists can create accounts and upload albums and images
* (STRETCH) Users can upload images.  
* (STRETCH) Users can search by artist, album, song and genre
* (STRETCH) Music player can be used across application.  

# Code Highlights

A challenge I faced while implementing this music player was how to have my application render a music player.  Music data is costly and any code that got stuck in an infinite loop proved to quite expensive.  I had to remigrate all my data to a second cloud to avoid racking up costs on AWS, a valuable lesson in the importance of writing good code and, specifically, React useEffects.  Below is a code block from my Music Player (which also renders a 'Audio Controls' component that essentially has a play/pause button alongside track information.  I used React State hooks to give the music player its responsiveness, React useEffect hooks to allow my component to adjust its behavior on changes in state and the React useRef hook to allow us to hold a reference to an instance of the Javascript Audio Object that we re-created every time we changed tracks.

Here's some code:

  const MusicPlayer = ({tracks}) => {

    // use State to keep track of track and isPlaying check.
    const [trackIndex, setTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const { name, songLink } = tracks[trackIndex];

    const audioRef = useRef(new Audio(songLink));


    //trackIndex use Effect fires on change of track
    useEffect(() => {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current = new Audio(tracks[trackIndex].songLink);
        // audioRef.current = new Audio(tracks[trackIndex].songLink);
        audioRef.current.play();
        setIsPlaying(true);
      }
      // startTimer()
    }, [trackIndex]);

    //isplaying useEffect fires on play/pause functionality.  
    useEffect(() => {
      if (isPlaying === false) {
        audioRef.current.pause();
        // startTimer()
      } else {
        audioRef.current.play();
      }
    }, [isPlaying]);
    
# Todos
* Add mosaic of supporters to every album page
* More robust seed data
* Implement above stretch features
