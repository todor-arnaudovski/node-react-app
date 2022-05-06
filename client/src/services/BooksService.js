export async function getBooks(getAvailable = false) {
  if (getAvailable) {
    try {
      const response = await fetch('/api/books/?available=true');
      if (!response.ok) throw new Error(response.statusText);

      const availableBooks = await response.json();

      return availableBooks;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  try {
    const response = await fetch('/api/books');
    if (!response.ok) throw new Error(response.statusText);

    const books = await response.json();

    return books;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getBook(id) {
  try {
    const response = await fetch(`/api/books/${id}`);
    if (!response.ok) throw new Error(response.statusText);

    const book = await response.json();

    return book;
  } catch (err) {
    throw new Error(err.message);
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
    if (!response.ok) throw new Error(response.statusText);
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updateBook(bookData, id) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookData),
  };

  try {
    const response = await fetch(`/api/books/${id}`, requestOptions);
    if (!response.ok) throw new Error(response.statusText);
  } catch (err) {
    throw new Error(err.message);
  }
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
    if (!response.ok) throw new Error(response.statusText);
  } catch (err) {
    throw new Error(err.message);
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
    if (!response.ok) throw new Error(response.statusText);
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function deleteBook(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    const response = await fetch(`/api/books/${id}`, requestOptions);
    if (!response.ok) throw new Error(response.statusText);
  } catch (err) {
    throw new Error(err.message);
  }
}
