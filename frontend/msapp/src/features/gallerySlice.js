import { createSlice } from '@reduxjs/toolkit';

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        images: [],
        currentPage: 1,
        category: 'sports',
        sortBy: 'id', // Default sorting method
        error: null,
    },
    reducers: {
        setImages: (state, action) => {
            state.images = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setImages, setCategory, setCurrentPage, setSortBy, setError } = gallerySlice.actions;
export default gallerySlice.reducer;
