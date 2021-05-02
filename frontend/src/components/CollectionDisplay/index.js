import AlbumCard from "../AlbumCard";
const CollectionDisplay = ({ collection }) => {
  return (
    <>
      <div className="collection-display">
        {collection && (
          <div className="collection-display">
            {collection.map((album) => (
              <AlbumCard album={album} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default CollectionDisplay;
