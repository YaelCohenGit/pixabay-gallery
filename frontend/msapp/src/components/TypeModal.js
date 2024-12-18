import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory, setImages, setError } from '../features/gallerySlice';
import axios from 'axios';

const TypeModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const categories = ['sports', 'animals', 'work', 'nature', 'technology']; 

    const handleCategorySelect = async (category) => {
        try {
            // Update the category in Redux
            dispatch(setCategory(category));
            // Fetch images from Pixabay API
            const response = await axios.get(
                `http://localhost:5000/api/images?category=${category}&page=1` 
            );
            // Update Redux with the new images
            dispatch(setImages(response.data.images));
            // Close the modal after selection
            onClose();
        } catch (error) {
            // Handle errors
            console.error('Error fetching images:', error);
            dispatch(setError('Failed to fetch images.'));
        }
    };
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Select Photo Type</h2>
                    {categories.map((category) => (
                        <p key={category}>
                            <button onClick={() => handleCategorySelect(category)}>
                                {category}
                            </button>
                        </p>
                    ))}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default TypeModal;
