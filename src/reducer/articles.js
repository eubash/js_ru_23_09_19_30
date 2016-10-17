import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { arrayToRecordMap } from '../store/helpers'
import { Record } from 'immutable'

const articlesRecord = new Record({
    id : null,
    date : new Date().toString(),
    title: "",
    text: "",
    comments: []
})


export default (articles = arrayToRecordMap(normalizedArticles, articlesRecord), action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            let keys = Object.keys(articles).filter(key => key != payload.id) //delete article bugfix
            return keys.reduce((obj, key) => (obj[key] = articles[key], obj), {})

        case ADD_COMMENT:

            const { articleId, id } = payload

            articles[articleId].set('comments', articles[articleId].get('comments').push(id))
    }

    return articles
}