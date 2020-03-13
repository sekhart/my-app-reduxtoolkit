import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";
import SinglePostPage from "./pages/SinglePostPage";
import UsersPage from "./pages/UsersPage";

import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <Router basename="reduxTest">
      <Navbar />
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Route exact path="/posts/:id" component={SinglePostPage} />
        <Route exact path="/users" component={UsersPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
