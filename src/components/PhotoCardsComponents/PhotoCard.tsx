type PhotoCardProps = {
  id: number;
  name: string;
  imgUrl: string;
  isLiked?: boolean;
  likePhoto: (id: number, isLiked: boolean) => void;
};
export const PhotoCard = (props: PhotoCardProps) => {
  return (
    <div className="hover:scale-105 duration-500 relative">
      <img className="rounded-lg" src={props.imgUrl} />
      <h3 className="py-2">{props.name}</h3>
      {!props.isLiked ? (
        <button
          className="px-4 rounded-lg bg-green-600"
          onClick={() => props.likePhoto(props.id, true)}
        >
          Like
        </button>
      ) : (
        <button
          className="px-4 rounded-lg bg-green-600"
          onClick={() => props.likePhoto(props.id, false)}
        >
          liked
        </button>
      )}
    </div>
  );
};
