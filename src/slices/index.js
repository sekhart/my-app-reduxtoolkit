import { combineReducers } from "redux";

import postsReducer from "./posts";
import postReducer from "./post";
import commentsReducer from "./comments";

const rootReducer = combineReducers({
  post: postReducer,
  posts: postsReducer,
  comments: commentsReducer
});

export default rootReducer;
