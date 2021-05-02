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
        {commentData.length && commentData.map((comment, idx) => (
            <div className="comment-container" key={idx}> 
                {comment.comment && 
                <div className='comment-line'>
                <img className='comment-avi' src={comment.User.imageUrl}></img>
                
                <p><span className={'comment-author'}>{`${comment.User.username}: `}</span>{comment.comment}</p>
                </div>
                }
            </div>
        ))} 
        </>
    )
}

export default CommentDisplay