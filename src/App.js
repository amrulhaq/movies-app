import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Homepage from './controllers/Homepage';
import MoviePage from './controllers/MoviePage';
import SearchBar from './components/SearchMovies';


function App() {
  return (
    <Router>
      <div className="App">
        <SearchBar/>
        <Switch>
          <Route path="/movie/:title">
            <MoviePage/>
          </Route>
          <Route path="/">
            <Homepage/>
          </Route>
        </Switch>
      </div>      
    </Router>
  );
}

export default App;
