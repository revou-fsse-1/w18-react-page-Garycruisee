type LikedPhotoProps = {
  count: number;
};

export const LikedPhotos = (props: LikedPhotoProps) => {
  return (
    <div className="mt-4 my-2 py-2 border rounded-lg border-green-500 bg-green-600">
      <p className="px-4 bg-green-600">You have liked {props.count} photos</p>
    </div>
  );
};
