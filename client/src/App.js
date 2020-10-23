import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddBookmark from "./components/addBookmark";
import AddTag from "./components/addTag";
import AddTagtoBookmark from "./components/addTagtoBookmark";
import RemoveTagfromBookmark from "./components/removeTagfromBookmark";
import Home from "./components/HomePage";
import ShowBookmark from "./components/displayBookmark";
import ShowTag from "./components/displayTags";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
            <Route exact path="/addBookmark" component={AddBookmark} />
            <Route exact path="/addTag" component={AddTag} />
            <Route exact path="/addTagtoBookmark" component={AddTagtoBookmark} />
            <Route exact path="/removeTagfromBookmark" component={RemoveTagfromBookmark}></Route>
            <Route exact path="/showBookmark" component={ShowBookmark}></Route>
            <Route exact path="/showTag" component={ShowTag}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
