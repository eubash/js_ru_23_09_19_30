import { ADD_COMMENT } from '../constants'

export default store => next => action => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT:
            const comments = store.getState().comments
            const lastId = Object.keys(comments).length

            const id = lastId + 1;  //increment ID

            ({...action, payload: Object.assign(payload, { id })})
    }

    next(action)
}