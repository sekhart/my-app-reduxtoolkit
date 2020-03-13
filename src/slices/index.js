import { combineReducers } from "redux";

import postsReducer from "./posts";
import postReducer from "./post";
import commentsReducer from "./comments";
import usersReducer from './users'

const rootReducer = combineReducers({
  post: postReducer,
  posts: postsReducer,
  comments: commentsReducer,
  users: usersReducer
});

export default rootReducer;
