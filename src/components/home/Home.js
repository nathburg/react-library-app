import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>Welcome to the library! Click <Link to='/books'>here</Link> to see our booklist.
    </div>
  );
}
