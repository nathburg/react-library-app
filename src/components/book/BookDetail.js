import Book from './Book';
import { useBookDetail } from '../../hooks/useBookDetail';
import { Link, useParams } from 'react-router-dom';

function BookDetail() {
  const { id } = useParams();
  const { book, loading, error } = useBookDetail(id);

  if (error)
    return (
      <>
        <h1>Something went wrong :(</h1> <h2>{error}</h2>
      </>
    );

  if (loading) return <h3>Loading book...</h3>;

  return (
    <>
      <h2>Return to <Link to='/books'>booklist</Link>.</h2>
      <Book book={book} showDetail />
    </>  
  );  
}

export default BookDetail;
