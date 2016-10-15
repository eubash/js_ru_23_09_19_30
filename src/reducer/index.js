import { combineReducers } from 'redux'
import count from './counter'
import articles from './articles'
<<<<<<< HEAD
import filters from './filterArticles'

export default combineReducers({
    articles, count, filters
=======
import comments from './comments'
import filters from './filters'

export default combineReducers({
    articles, comments, count, filters
>>>>>>> 72e95cefac4fc527ca21f8317af1b94f3126cf04
})