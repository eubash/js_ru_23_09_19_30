//import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../store/helpers'
import { ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import { Record, Map } from 'immutable'

const CommentModel = Record({
    id: null,
    user: '',
    text: '',
    loading_comments: false,
    loaded_comments: false
})

const defaultState = new Map({
    entities: arrayToMap([], comment => new CommentModel(comment))
})


export default (comments = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', generatedId], new CommentModel({...payload.comment, id: generatedId}))

        case LOAD_ALL_COMMENTS + SUCCESS:
              return comments
                    .update('entities', entities =>
                    entities.merge(arrayToMap(response, comment => new CommentModel(comment)))
                )
}

return comments
}