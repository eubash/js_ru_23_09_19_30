import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, START, SUCCESS, LOAD_PAGINATION_COMMENTS } from '../constants'
import $ from 'jquery'

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId, comment
        },
        generateId: true
    }
}

export function loadCommentsForArticle(articleId) {
    return {
        type: LOAD_COMMENTS_FOR_ARTICLE,
        payload: { articleId },
        callAPI: `/api/comment?article=${articleId}`
    }
}

export function loadPaginationComments(pageIndex) {

    const index = pageIndex == null ? 0 : (pageIndex * 5) - 5
    return {
        type: LOAD_PAGINATION_COMMENTS,
        payload: { index },
        callAPI: `/api/comment?limit=5&offset=${index}`
    }
}


/*
 export function loadCommentsForArticle(articleId) {
 return (dispatch) => {
 dispatch({
 type: LOAD_COMMENTS_FOR_ARTICLE + START,
 payload: { articleId }
 })
 $.get(`/api/comment?article=${articleId}`)
 .done(response => dispatch({
 type: LOAD_COMMENTS_FOR_ARTICLE + SUCCESS,
 payload: { articleId },
 response
 }))
 }
 }
 */