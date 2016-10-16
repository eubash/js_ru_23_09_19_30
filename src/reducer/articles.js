import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { arrayToMap } from '../store/helpers'

export default (articles = arrayToMap(normalizedArticles), action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return Object.keys(articles)
                .filter(key => key != payload.id)

        case ADD_COMMENT:
            const { articleId, id } = payload
            const article = articles[articleId]

            return Object.assign({}, articles, {
                [articleId]: Object.assign({}, article, {comments: article.comments.concat(id)})
            })
    }

    return articles
}