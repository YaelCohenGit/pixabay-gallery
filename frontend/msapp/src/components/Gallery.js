import React, { useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../features/gallerySlice';
import ImageDetailsModal from './ImageDetailsModal';

const Gallery = () => {
    const { images, currentPage } = useSelector((state) => state.gallery);
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState(null);

    const handlePrev = () => {
        if (currentPage > 1) dispatch(setCurrentPage(currentPage - 1));
    };

    const handleNext = () => {
        dispatch(setCurrentPage(currentPage + 1));
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
            <div className="gallery-grid">
                {images.slice(0, 9).map((img) => (
                    <div
                        key={img.id}
                        className="image-card"
                        onClick={() => handleImageClick(img)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={img.previewURL} alt={img.tags} />
                    </div>
                ))}
            </div>
            <ImageDetailsModal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                image={selectedImage}
            />
        </div>
    );
};

export default Gallery;


