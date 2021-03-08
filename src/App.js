import React from "react";
import {
  BrowserRouter as Router,


  Link, Route, Switch
} from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import PostDetail from "./components/Post Detail/PostDetail";


function App() {
  return (
    <div className="App">
     <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="home">Home 2</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/post/:id">
            <PostDetail/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
