const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000; // Server port
const PIXABAY_API_KEY = '25540812-faf2b76d586c1787d2dd02736'; // Pixabay API key

// Middleware
app.use(cors());

// Route to fetch images
app.get('/api/images', async (req, res) => {
    const { category = '', page = 1, sort = 'id' } = req.query;
    const perPage = 9;
    const start = (page - 1) * perPage;

    try {
        // Fetch data from Pixabay API
        const response = await axios.get(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${category}`);
        let images = response.data.hits.slice(start, start + perPage);
        // Sort images based on query parameter
        if (sort === 'id') {
            images.sort((a, b) => a.id - b.id);
        } else if (sort === 'date') {
            images.sort((a, b) => new Date(b.webformatURL) - new Date(a.webformatURL));
        }
        res.json({ images });
    } catch (error) {
        console.error('Error fetching data from Pixabay:', error.message);
        res.status(500).json({ error: 'Failed to fetch images from Pixabay API' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

