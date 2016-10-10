import { FILTER_ARTICLES } from '../constants'

export default (filters = [], action) => {

    const { type, payload } = action

    switch (type) {

        case FILTER_ARTICLES:

            filters = payload.arr.slice(0)

    }

    return filters
}


