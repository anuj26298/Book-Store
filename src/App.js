import BookCard from "./component/card/card.jsx";
import Header from "../src/component/header/Header.jsx";
import HomePage from './component/home-page/home-page.jsx';
import { BrowserRouter, Switch,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route exact path="/BookCard">
        <BookCard />
      </Route>
      <Route exact path="/header">
        <HomePage/>
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
