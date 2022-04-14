import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UserPages/UsersPage';
import UserPage from './pages/UserPages/UserPage';
import CreateUserPage from './pages/UserPages/CreateUserPage';
import BooksPage from './pages/BookPages/BooksPage';
import BookPage from './pages/BookPages/BookPage';
import CreateBookPage from './pages/BookPages/CreateBookPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:firstName" element={<UserPage />} />
        <Route path="users/new" element={<CreateUserPage />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="books/:title" element={<BookPage />} />
        <Route path="books/new" element={<CreateBookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
