import { Link } from 'react-router-dom'
import './AlbumCard.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { csrfFetch } from '../../store/csrf'


const AlbumCard = ({comments, album}) => {
   

    const [comment, setComment] = useState('')
    const userId = useSelector((state) => state.session.user.id);
    const albumId = album.id
    const [errors, setErrors] = useState([])
    const [dBComment, setdBComment] = useState(null)
    console.log(errors)

    ///Functions -- can refactor this into one function?
    const handleSubmit = async (e) => {
        e.preventDefault()
      

        if (comment === "") {
          const errors = []
          errors.push("please enter a comment");
          setErrors(errors)
          return;
        }
        const res = await csrfFetch('/api/comments', {
            method: 'POST',

            body: JSON.stringify({comment, userId, albumId})
        })
        const data = await res.json()
        setErrors([]); 
        setdBComment(comment)
        //logic to replace "comment-form" with "comment"

    }
   

    const editComment = async (e) => {
      e.preventDefault()
      if (comment === '') {
        errors.push("please enter a comment")
        return
      }
      const res = await csrfFetch('/api/comments', {
        method: 'PUT',
        body: JSON.stringify({comment, albumId, userId})
      })
      const data = await res.json()
      setErrors([])
      setdBComment(comment)

    }

    const deleteComment = async (e) => {
      e.preventDefault()
      const res = await csrfFetch('/api/comments', {
        method: 'DELETE',
        body: JSON.stringify({userId, albumId})
      })
      setComment("")
      setdBComment("")
    }

    useEffect(() => {
      const getComment = async (e) => {
        const res = await csrfFetch(`/api/comments/${userId}/${albumId}`);
        const data = await res.json();
      
        setdBComment(data.comment)
      };
      getComment();
    }, [setdBComment]);


   
    return (
      <>
        <div className="album-card-container">
          <Link className="collection-link" to={`/albums/${album.id}`}>
            <img className="collection-images" src={album.albumArt}></img>
          </Link>
          <h3>{album.name}</h3>
          <h5>by {album.Artist.name}</h5>
          {errors.length > 0 && errors.map((error) => <p>{error}</p>)}
          {!dBComment ? (
            <div className="comment-form">
              <form onSubmit={handleSubmit}>
                <textarea
                  className="text-area"
                  type="text"
                  rows="3"
                  value={comment}
                  placeholder="comment will  appear on artists page..."
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <button type="submit">Comment</button>
              </form>
            </div>
          ) : (
            <div className="comment-edit-delete-container">
              <form onSubmit={editComment}>
                <textarea
                  className="text-area"
                  placeholder={dBComment}
                  value={comment}
                  type="text"
                  rows="3"
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <button type="submit">Edit</button>
              </form>
              <form onSubmit={deleteComment}>
                <button type="submit">Delete</button>
              </form>
            </div>
          )}
        </div>
      </>
    );
}

export default AlbumCard