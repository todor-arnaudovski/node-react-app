const PageHeader = ({ title }) => {
  return (
    title && (
      <>
        <h1 className='h1 mb-4'>{title}</h1>
        <hr />
      </>
    )
  );
};

export default PageHeader;
