import { arrayToMap } from '../store/helpers'
import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, START, SUCCESS, LOAD_PAGINATION_COMMENTS } from '../constants'
import { Record, Map } from 'immutable'

const CommentModel = Record({
    id: null,
    user: '',
    text: ''
})

const defaultState = new Map({
    entities: new Map({}),
    total : null
})

export default (comments = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case LOAD_PAGINATION_COMMENTS + START:
            return comments  //.set('loading', true)

        case LOAD_PAGINATION_COMMENTS + SUCCESS:
            return comments.update('entities', entities =>
                    entities.merge(arrayToMap(response.records, comment => new CommentModel(comment))))
                    .set('total',response.total)

        case ADD_COMMENT:
            return comments.setIn(['entities', generatedId], new CommentModel({...payload.comment, id: generatedId}))

        case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
            return comments.update('entities', entities =>
            entities.merge(arrayToMap(response, comment => new CommentModel(comment)))
            )
}

return comments

}