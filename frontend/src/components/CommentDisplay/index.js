import { useEffect, useState } from "react"
import { csrfFetch } from "../../store/csrf"


const CommentDisplay = ({albumId}) => {
    const [ comments, setComments] = useState([])

    useEffect(() => {

        const fetchComments = async () => {
        const res = await csrfFetch(`/api/comments/${albumId}`)
        const data = await (res.json())
        console.log(data)
        setComments(data)
        }
        fetchComments()
    }, [])
    return (
        <>
        {comments.length && comments.map((comment) => (
            <p>{comment.comment}</p>)
        )
        }
        </>
    )    
}

export default CommentDisplay