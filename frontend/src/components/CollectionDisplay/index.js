import AlbumCard from "../AlbumCard";
const CollectionDisplay = ({comments, collection }) => {
  return (
    <>
      <div className="collection-display">
        {collection && (
          <div className="collection-display">
            {collection.map((album) => (
              <AlbumCard comments={comments} album={album} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default CollectionDisplay;
