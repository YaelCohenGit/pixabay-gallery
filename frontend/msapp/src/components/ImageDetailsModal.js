import React from 'react';

const ImageDetailsModal = ({ isOpen, onClose, image }) => {
    if (!isOpen || !image) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Image Details</h2>
                <img src={image.largeImageURL} alt={image.tags} style={{ width: '100%' }} />
                <p><strong>Views:</strong> {image.views}</p>
                <p><strong>Downloads:</strong> {image.downloads}</p>
                <p><strong>Collections:</strong> {image.collections}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ImageDetailsModal;
