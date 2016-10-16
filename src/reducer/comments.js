import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../store/helpers'
import { ADD_COMMENT } from '../constants'

export default (comments = arrayToMap(normalizedComments), action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            const { id, user, text } = payload
            return Object.assign({}, comments, {
                [id]: { id, user, text }
            })
    }

    return comments
}