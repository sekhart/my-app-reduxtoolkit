import { combineReducers } from 'redux'

import postsReducer from './postsReducer'
import usersReducer from './userReducer'
import commentReducer from './commentReducer'
import postReducer from './postReducer'

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    comments: commentReducer,
    post: postReducer,
})

export default rootReducer