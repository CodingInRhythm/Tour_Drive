import { useSelector, useDispatch } from 'react-redux'
import { support } from "../../store/session";
import { useState, useEffect } from 'react'
import { csrfFetch } from '../../store/csrf'
const SupportButton = ({user, album}) => {
    const dispatch = useDispatch()
    const userId = useSelector((state) => state.session.user?.id)
    const albumId = useSelector((state) => state.album.album.id)

    const [supported, setSupported] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(support(userId, albumId))
        setSupported(true)
    }

       useEffect(() => {
         //I need the follow and support components to know if the user supports, follows already
         //to do this, I need to have access to both joins tablesand if the album Id is in the User_Collection joins table, they do
         //and if the artist Id is in the User_Follows they do.
         const FetchInfo = async () => {
          
           const resSupports = await csrfFetch(`/api/collection/${user.id}`);
           const allSupports = await resSupports.json();

        

           let supports = allSupports.Albums.filter((a) => a.id === album.id);
     

           if (supports.length) {
             setSupported(true);
           }
         };
         if(user)FetchInfo();

         //now need to perhaps setState
       }, []);
if (!userId) return null
    return (
        <form onSubmit={handleSubmit}>
            <button type='submit'>{supported ? 'Thanks for supporting' : 'Support now!'} </button>
        </form>
    )
}

export default SupportButton