import { normalizedComments } from '../fixtures'
import { arrayToRecordMap } from '../store/helpers'
import { ADD_COMMENT } from '../constants'
import { Record } from 'immutable'

const commentsRecord = Record({
    id : null,
    user : "User",
    text: ""
})

export default (comments = arrayToRecordMap(normalizedComments, commentsRecord), action) => {
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