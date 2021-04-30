import { useEffect, useState } from "react"
import { csrfFetch } from "../../store/csrf"
import './CommentDisplay.css'

const CommentDisplay = ({albumId}) => {
    const [ commentData, setCommentData] = useState([])

    useEffect(() => {

        const fetchComments = async () => {
        const res = await csrfFetch(`/api/comments/${albumId}`)
        const data = await res.json()
        console.log(data)
        setCommentData(data)
        }
        fetchComments()
    }, [])
    return (
        <>
        {commentData.length && commentData.map((comment) => (
            <div className="comment-container"> 
                <img src={comment.User.imageUrl}></img>
                <p><span>{`${comment.User.username}: `}</span>{comment.comment}</p>
            </div>
        ))} 
        </>
    )
}

export default CommentDisplay