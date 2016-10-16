import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { arrayToMap } from '../store/helpers'

export default (articles = arrayToMap(normalizedArticles), action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            let keys = Object.keys(articles).filter(key => key != payload.id) //delete article bugfix
            return keys.reduce((x, key) => (x[key] = articles[key], x), {})

        case ADD_COMMENT:
            const { articleId, id } = payload
            const article = articles[articleId]

            return Object.assign({}, articles, {
                [articleId]: Object.assign({}, article, {comments: article.comments.concat(id)})
            })
    }

    return articles
}