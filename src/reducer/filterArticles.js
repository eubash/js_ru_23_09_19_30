import { articles as defaultArticles } from '../fixtures'
import { FILTER_ARTICLES } from '../constants'

export default (articles = defaultArticles, action) => {

    const { type, payload } = action

    switch (type) {

        case FILTER_ARTICLES:

            if(payload.arr.length == 0) {
               return defaultArticles
            } else {
                return articles.filter(function (o) {
                    return payload.arr.some(function (i) {
                        return i.value == o.id
                    })
                })
            }

    }

    return articles
}


