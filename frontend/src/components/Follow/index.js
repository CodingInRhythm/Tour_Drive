import { useDispatch, useSelector } from 'react-redux'
import { follow, unfollow } from '../../store/session'
import { useEffect, useState } from 'react'
import { csrfFetch } from '../../store/csrf'

// const Follow = () => {
//     const dispatch = useDispatch()
//     const userId = useSelector((state) => state.session.user.id)
//     const artistId = useSelector((state) => state.album.album.Artist.id)

//     const [followed, setFollowed] = useState(false)
//     console.log(userId, 'FOLLOW COMP')
//     // const handleSubmit = (e) => {
//     //     e.preventDefault()
//     //     if (followed) {
//     //     dispatch(follow(userId, artistId)) // how to handle unfollow logic??
//     //     }
//     //     else {dispatch(unfollow(userId, artistId))}
    
//     // }
//     const handleSubmit = (e) => {
//         return null
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <button type="submit" onClick={setFollowed(!followed)}>{followed ? "unfollow" : "follow"}
//             </button>
//         </form>
//     )
// }


const Follow = ({user, album}) => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.session.user?.id)
    const artistId = useSelector((state) => state.album.album.Artist.id)

    const [followed, setFollowed] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!followed) {
        dispatch((follow(userId, artistId)))
        setFollowed(true)
        }
        else {
          dispatch(unfollow(userId, artistId))
          setFollowed(false)
        }

    }

    useEffect(() => {

      const FetchFollows = async () => {
          const resFollows = await csrfFetch(`/api/follows/${user.id}`);
          const allFollows = await resFollows.json();

          let followArray = allFollows.Artists.filter(
          (artist) => artist.id === album.artistId
          );
           
          if (followArray.length) {
              setFollowed(true);
          }
          else{
            setFollowed(false)
          }
        }

        if(user)FetchFollows()
    },[])


if(!user) return null
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" >
        {followed ? "unfollow" : "follow"}
      </button>
    </form>
  );
};

export default Follow