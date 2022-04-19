export async function getBooks() {
    try {
      const response = await fetch('/api/books');
      const books = await response.json();
      return books;
    } catch (err) {
      console.error(err);
      return [];
    }
  }
  
  export async function getBook(url) {
    try {
      const response = await fetch(`/api/books/${url}`);
      const book = await response.json();
      return book;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  
  export async function createBook(bookData) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookData),
    };
  
    const response = await fetch('/api/books', requestOptions);
    const book = await response.json();
    
    return book;
  }

  export async function deleteBook(bookId) {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
  
    const response = await fetch(`/api/books/${bookId}`, requestOptions);
    const book = await response.json();
  
    return book;
  }