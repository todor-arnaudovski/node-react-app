const Book = ({ book }) => {
  return (
    book && (
      <div>
        <h2 className='h3'>
          <span className='text-primary'>{book.title}</span> by{' '}
          <span className='text-success'>{book.author}</span>
        </h2>
        <p>Published: {book.published}</p>
      </div>
    )
  );
};

export default Book;
