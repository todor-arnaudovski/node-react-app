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
  
  export async function getBook(title) {
    try {
      const response = await fetch(`/api/books/${title}`);
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
  