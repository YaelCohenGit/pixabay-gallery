import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImages, setError } from './features/gallerySlice';
import axios from 'axios';
import Gallery from './components/Gallery';
import TypeModal from './components/TypeModal';
import SortSelector from './components/SortSelector';

const App = () => {
    const dispatch = useDispatch();
    const { category, currentPage, sortBy } = useSelector((state) => state.gallery);
    const [isTypeModalOpen, setTypeModalOpen] = useState(false);

    // Fetch images when category, page, or sortBy changes
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/api/images?category=${category}&page=${currentPage}&sort=${sortBy}`
                );
                dispatch(setImages(response.data.images));
            } catch (error) {
                console.error('Error fetching images:', error);
                dispatch(setError('Failed to fetch images'));
            }
        };

        fetchImages();
    }, [dispatch, category, currentPage, sortBy]);

    const toggleModal = () => setTypeModalOpen(!isTypeModalOpen);

    return (
        <div className="App">
            <h1>Pixabay Gallery</h1>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <button onClick={toggleModal} style={{ marginRight: '8px' }}>
                    Select Photos Type
                </button>
                <SortSelector /> {}
            </div>
            <Gallery />
            {isTypeModalOpen && <TypeModal isOpen={isTypeModalOpen} onClose={toggleModal} />}
        </div>
    );
};

export default App;

