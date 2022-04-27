export async function getBooks(getAvailable = false) {
  if (getAvailable) {
    try {
      const response = await fetch('/api/books/?available=true');
      const availableBooks = await response.json();
      return availableBooks;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  try {
    const response = await fetch('/api/books');
    const books = await response.json();
    return books;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getBook(id) {
  try {
    const response = await fetch(`/api/books/${id}`);
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

  try {
    const response = await fetch('/api/books', requestOptions);
    const book = await response.json();

    return book;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function updateBook(bookData, id) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookData),
  };

  const response = await fetch(`/api/books/${id}`, requestOptions);
  const user = await response.json();

  return user;
}

export async function addBookToUser(updateData) {
  const { bookId } = updateData;

  if (!bookId) return console.log('You must select a book.');

  const requestOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updateData),
  };

  try {
    const response = await fetch(`/api/books/${bookId}`, requestOptions);
    const book = await response.json();

    return book;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function removeBookFromUser(updateData) {
  const { bookId } = updateData;

  const requestOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updateData),
  };

  try {
    const response = await fetch(`/api/books/${bookId}`, requestOptions);
    const book = await response.json();

    return book;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function deleteBook(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    const response = await fetch(`/api/books/${id}`, requestOptions);
    const book = await response.json();

    return book;
  } catch (err) {
    console.log(err);
    return null;
  }
}
