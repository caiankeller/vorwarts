import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Book from "./pages/Book";

import GlobaStyle from "./GlobalStyle";

const App = () => {
  
  return (
    <Router>
      <GlobaStyle />
      <Header />
      <Switch>
        <Route path="/book/:book" component={Book} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
