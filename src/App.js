import logo from './logo.svg';
import './App.css';
import Home from './view/Home';
import Post from './view/Post';
import  PostComment from "./view/PostComment";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
            <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/post/:id">
          <Post />
        </Route>
        <Route exact path="/post/Comments/:id">
          <PostComment />
        </Route>
        
      </Switch>
    </Router>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
