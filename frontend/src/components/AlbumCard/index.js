import { Link } from 'react-router-dom'
import './AlbumCard.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { csrfFetch } from '../../store/csrf'


const AlbumCard = ({album}) => {
   

    const [comment, setComment] = useState('comment')
    const userId = useSelector((state) => state.session.user.id);
    const albumId = album.id
    const [errors, setErrors] = useState([])
    const [commentFormDisplayName, setCommentFormDisplayName] = useState("")
    const [commentDiv, setCommentDiv] = useState("hidden")    
    
    ///Functions -- can refactor this into one function?
    const handleSubmit = async (e) => {
        e.preventDefault()
        // if(comment === "") {
        //     const errors = []
        //     errors.push("Please fill out field")
        //     setErrors(errors)
        //     return 
        // }
        const res = await csrfFetch('/api/comments', {
            method: 'POST',

            body: JSON.stringify({comment, userId, albumId})
        })
        const data = await res.json()

        //logic to replace "comment-form" with "comment"

       setCommentFormDisplayName("none")
       setCommentDiv("")

    }

    const editComment = async (e) => {
      e.preventDefault()

      const res = await csrfFetch('/api/comments', {
        method: 'PUT',
        body: JSON.stringify({comment, userId})
      })
      const data = await res.json()

      setCommentDiv("");
      setCommentFormDisplayName("none");
    }

    const deleteComment = async (e) => {
      e.preventDefault()
      const res = await csrfFetch('/api/comments', {
        method: 'DELETE',
        body: JSON.stringify({userId, albumId})
      })
      setCommentFormDisplayName("");
      setCommentDiv("none");
    }

    return (
      <>
        <div className="album-card-container">
          <Link to={`/albums/${album.id}`}>
            <img className="collection-images" src={album.albumArt}></img>
          </Link>
          <h3>{album.name}</h3>
          <h5>by {album.Artist.name}</h5>
          <div className="comment-form" style={{display:commentFormDisplayName}}>
            <form onSubmit={handleSubmit}>
              <textarea
                type="text"
                rows="3"
                value={comment}
                placeholder="comment will  appear on artists page"
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <button type="submit">Comment</button>
              {errors && errors.map((error) => (<p>{error}</p>))}
            </form>
        </div>
        <div className="comment" style={{display:commentDiv}}>
            <p>{comment}</p>
            <div className="comment-edit-delete-container"></div>
            <form onSubmit={editComment}>
              <button type='submit' onClick={(e) => {setCommentFormDisplayName("")}}>Edit</button>
            </form >
            <form onSubmit={deleteComment}>
              <button type="submit">Delete</button>
            </form>

        </div>
        </div>
      </>
    );
}

export default AlbumCard