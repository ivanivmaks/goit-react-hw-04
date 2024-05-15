import { useEffect, useState } from "react";
import fetchImagesWithTopic from "./api.js";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const data = await fetchImagesWithTopic(query, page);
        setImages((prevData) => [...prevData, ...data]);
      } catch {
        setError(true);
       toast.error(
         "Whoops, something went wrong! Please try reloading this page!"
       );
        console.log(error)
      } finally {
        setLoading(false);
      }
    };

    if (query !== "") {
      fetchImages();
    }
  }, [query, page, error]);

  const handleSearch = async (topic) => {
    setImages([]);
    setError(false);
    setQuery(topic);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const openModal = (url) => {
    setSelectedImageUrl(url);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageUrl={selectedImageUrl}
      />
      {images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} loading={loading} />
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
