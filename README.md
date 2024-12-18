# Pixabay Gallery

A full-stack project that fetches and displays images from the Pixabay API using **React.js** and **Node.js**. The app includes a gallery with pagination, sorting, and category selection, showcasing a clean and scalable architecture.

---

## Features

### Frontend (React.js)
- **Gallery Display**:
  - Fetches data from the backend and displays images in a 3x3 grid.
  - Displays the first 9 images from the API response.

- **Pagination**:
  - Two buttons, "Prev" and "Next," allow users to navigate through images in increments of 9.

- **Category Selection**:
  - A modal allows users to select categories such as "Animals," "Sports," or "Work."
  - Fetches new data based on the selected category and updates the gallery.

- **Image Details Modal**:
  - Clicking an image opens a modal displaying details like:
    - **Views**
    - **Downloads**
    - **Collection Count**

---

### Backend (Node.js)
- **Express.js API**:
  - Implements a REST API with organized and modular architecture.
  
- **Routes**:
  - **Fetch Images**: Retrieves images from the Pixabay API based on category and pagination.
  - **Sorting**: Supports sorting images by `id` or `date`.
  - **Pagination**: Implements pagination logic to serve the client-side requirements.

- **Error Handling**:
  - Handles API call failures, invalid requests, and other server-side errors gracefully.

- **Clean Code**:
  - Efficient architecture with detailed documentation and comments.

---

## Technologies Used

### Frontend
- **React.js**: For building the user interface.
- **Redux**: To manage the application state.
- **CSS**: For styling the gallery and modals.

### Backend
- **Node.js**: To handle server-side logic.
- **Express.js**: To create a REST API.
- **Axios**: For making HTTP requests to the Pixabay API.

---

## Project Highlights
- **Scalable Architecture**: Built with flexibility for future enhancements.
- **Error Handling**: Ensures smooth user experience even when API calls fail.
- **Responsive Design**: Optimized for different screen sizes.
- **Efficient API Usage**: Makes effective use of the Pixabay API with parameters for filtering and sorting.

---

## How It Works

1. **Gallery Initialization**:
   - The app fetches images from the Pixabay API with a default category and displays them in a grid.

2. **Pagination**:
   - Clicking "Prev" or "Next" updates the gallery by fetching the relevant images from the server.

3. **Category Selection**:
   - A modal allows the user to select a new category, making a server call to fetch data for that category.

4. **Image Details**:
   - Clicking an image opens a modal that displays its metadata, such as views, downloads, and collection count.

---

## Contribution

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push the branch (`git push origin feature-name`).
5. Create a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

This project was developed to demonstrate full-stack development capabilities and proficiency with React.js, Redux, Node.js, and RESTful API design.
