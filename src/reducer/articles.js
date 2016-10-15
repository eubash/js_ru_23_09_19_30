import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'
import { arrayToMap } from '../store/helpers'

<<<<<<< HEAD

export default (articles = defaultArticles, action) => {
=======
export default (articles = arrayToMap(normalizedArticles), action) => {
>>>>>>> 72e95cefac4fc527ca21f8317af1b94f3126cf04
    const { type, payload } = action
  console.log(payload)
    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id != payload.id)

    }

    return articles
}
