import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Resturent from './components/Resturent/Resturent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/resturent">
            <Resturent></Resturent>
          </Route>
          <Route path="/meals/:detailsId">
            <Details></Details>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
