import { useState } from "react";
import { photoData } from "./data/photosdata";
import { HeaderText } from "./components/HeaderComponents/HeaderText";
import { PhotoSearch } from "./components/HeaderComponents/PhotoSearch";
import { LikedPhotos } from "./components/PhotoCardsComponents/LikedPhotos";
import { PhotoCard } from "./components/PhotoCardsComponents/PhotoCard";
import { ModalForm } from "./components/FooterComponents/ModalForm";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [photos, setPhotos] = useState(photoData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleLikePhotos(id: number, isLiked: boolean) {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        photo.isLiked = isLiked;
      }
      return photo;
    });
    setPhotos(newPhotos);
  }
  const likedPhotoCount = photos.filter((photo) => photo.isLiked).length;

  const handleFilterChange = (value: string) => {
    setSearchInput(value);
  };

  const filteredPhotos = photoData.filter((photo) =>
    photo.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center mb-5">
        <HeaderText />
        <PhotoSearch setFilterValue={handleFilterChange} />
        <LikedPhotos count={likedPhotoCount} />
        <section className="mt-4 mb-10 max-w-[900px] grid sm:grid-cols-2 md:grid-cols-4 gap-9">
          {filteredPhotos.map((photos) => (
            <PhotoCard
              key={photos.id}
              id={photos.id}
              imgUrl={photos.imgSrc}
              name={photos.name}
              isLiked={photos.isLiked}
              likePhoto={handleLikePhotos}
            />
          ))}
        </section>
        <button
          className="hover:bg-green-600 bg-green-700 text-white px-4 py-2 rounded-md"
          onClick={openModal}
        >
          Account Register
        </button>
        {isModalOpen && <ModalForm closeModal={closeModal} />}
      </main>
    </>
  );
}

export default App;
