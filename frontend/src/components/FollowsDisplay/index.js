import { Link } from "react-router-dom";
const FollowsDisplay = ({ follows }) => {
  
  return (
    <>
      
      <div className="follows-display"></div>
        {follows &&
          follows.map((follow) => (
            <>
            <div className="follows-display">
              <Link to="/artists/:id">
                <img className="artist-images" src={follow.avatarUrl} />
              </Link>
              <p>
                <em>{follow.name}</em>
              </p>
              </div>
            </>
          ))}
      
    </>
  );
};
export default FollowsDisplay;
