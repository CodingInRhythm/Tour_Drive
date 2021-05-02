import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { csrfFetch } from '../../store/csrf'

import './userProfile.css'
import UserDisplay from '../UserDisplay'
import FollowsDisplay from '../FollowsDisplay'
import CollectionDisplay from '../CollectionDisplay'
const UserProfilePage = () => {
    const user = useSelector((state) => state.session.user)
    const [follows, setFollows] = useState([])
    const [collection, setCollection] = useState([])
    const [showFollowers, setShowFollowers] = useState(true)
    const [showCollection, setShowCollection] = useState(false)
    
    const id = user.id
  
    useEffect(() => {

        async function FetchFollows() {
        const res =  await fetch (`/api/follows/${id}`)
        
        let data = await res.json()
       
        setFollows(data.Artists)
       
        
    }
    FetchFollows()
    },[])

   

    useEffect(() => {
        async function FetchCollection() {
            const res = await fetch (`/api/collection/${id}`)
            let data = await res.json()
            console.log(data)
            setCollection(data.Albums)
            
            
            
        }
        FetchCollection()
    }, [])
    

    return (
      <>
        <div className="user-profile-container">
          <UserDisplay user={user} />
          <div className="collection-container">
            <div className="tab-container">
                <ul className="grid-tabs">
                    <li onClick={() => setShowFollowers(true)} className="collection-tab">Follows</li>
                    <li onClick={() => setShowFollowers(false)} className="follows-tab">Collection</li>
                </ul>
            </div>
            {showFollowers ? (
            <>
                <h3>Follows</h3>
                <FollowsDisplay follows={follows} />
            </>
            ) : (
            <>
                <h1>Collections</h1>
                <CollectionDisplay collection={collection} />
            </>
            )}
          </div>
        </div>
      </>
    );
}

export default UserProfilePage