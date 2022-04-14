import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';
import CreateUserPage from './pages/CreateUserPage';
import BooksPage from './pages/BooksPage';
import BookPage from './pages/BookPage';

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
        {/* <Route path="users/new" element={<CreateUserPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
