import BookList from './components/book/BookList';
import Home from './components/home/Home';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import BookDetail from './components/book/BookDetail';
import NotFound from './components/notfound/NotFound';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Switch>
        <Route path='/books/:id' component={BookDetail} /> 
        <Route path='/books' component={BookList} />
        <Route path='/' component={Home} />
        <Route path='*' component={NotFound} />
      </Switch>
      
    </main>
  );
}

export default App;
