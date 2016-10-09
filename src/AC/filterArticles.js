import { FILTER_ARTICLES } from '../constants'

export function filterArticles(arr) {
    return {
        type: FILTER_ARTICLES,
        payload: { arr }
    }
}