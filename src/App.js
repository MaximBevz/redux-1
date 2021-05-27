import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './components/home/home';
import Counter from './components/counter/counter';

function App() {
  return (
    <div className="App">
      <Router>
        <div><Link to={'/'}>Go to home page</Link></div>
        <div><Link to={'/counter'}>Go to Counter</Link></div>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/counter'} render={() => <Counter/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
