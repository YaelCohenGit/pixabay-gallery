import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../features/gallerySlice';

const SortSelector = () => {
    const dispatch = useDispatch();
    const { sortBy } = useSelector((state) => state.gallery);

    const handleSortChange = (event) => {
        dispatch(setSortBy(event.target.value));
    };

    return (
        <div style={{ marginBottom: '16px' }}>
            <label htmlFor="sort">Sort By: </label>
            <select id="sort" value={sortBy} onChange={handleSortChange}>
                <option value="id">ID</option>
                <option value="date">Date</option>
            </select>
        </div>
    );
};

export default SortSelector;
