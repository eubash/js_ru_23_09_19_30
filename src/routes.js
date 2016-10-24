import React from 'react'
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import Container from './components/Container'
import Counter from './components/Counter'
import ArticleListPage from './routeHandlers/ArticleListPage'
import Filters from './components/Filters'
import CommentsPaginationListWrapper from './routeHandlers/CommentsPaginationWrapper'
import NewArticleForm from './components/NewArticleForm'
import ArticlePage from './routeHandlers/ArticlePage'
import NotFoundPage from './routeHandlers/NotFoundPage'

//export default <Router history = {browserHistory}>
//    <Route path = "/" component = {Container}>
//        <Route path = "counter" component = {Counter} />
//        <Route path = "articles" component = {ArticleListPage}>
//            <Route path = "new" component = {NewArticleForm} />
//            <Route path = ":id" component = {ArticlePage} />
//        </Route>
//        <Route path = "comments" component = {CommentPaginationList}>
//            <Route path = ":pageIndex" component = {CommentPaginationList} />
//        </Route>
//        <Route path = "filters" component = {Filters} />
//        <Route path = "*" component = {NotFoundPage} />
//    </Route>
//</Router>

export default <Router history = {browserHistory}>
    <Route path = "/" component = {Container}>
        <Route path = "counter" component = {Counter} />
        <Route path = "articles" component = {ArticleListPage}>
            <Route path = "new" component = {NewArticleForm} />
            <Route path = ":id" component = {ArticlePage} />
        </Route>
        <Route path = "comments/:pageIndex" component = {CommentsPaginationListWrapper} />
        <Route path = "filters" component = {Filters} />
        <Route path = "*" component = {NotFoundPage} />
    </Route>
</Router>