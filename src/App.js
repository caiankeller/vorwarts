import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header'


import Home from './pages/Home';
import Book from './pages/Book';

import GlobaStyle from './GlobalStyle'

const App = () => {

  const [books, setBooks] = useState('')

  useEffect(() => {

    if(!localStorage.getItem('books')){
      fetch("https://raw.githubusercontent.com/vonweinKeller/vorwarts/main/books.json?token=AVUJBLUUTZVAR4LV4NPIMV3BI22QU")
      .then(res => res.json())
      .then((data) => {
        localStorage.setItem('books', JSON.stringify(data))
        setBooks(data)
      })
    }


  }, [])

  return (
    <Router>
      <GlobaStyle />
      <Header />
      <Switch>
      <Route path="/book/:book" component={Book}/>
      <Route path='/' component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
