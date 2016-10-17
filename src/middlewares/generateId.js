import { ADD_COMMENT } from '../constants'

export default store => next => action => {
    const { type, payload } = action

    //Плохо, мидлвары должны быть максимально универсальными, стоит делать так, что б их легко можно было переиспользовать
    //плохая логика для генерации id, нет никакой гарантии уникальности; Лучше просто рандом
   switch (type) {
        case ADD_COMMENT:
            const comments = store.getState().comments
            const lastId = Math.max(...Object.keys(comments))  // get max id

            const id = lastId + 1;  //increment ID

            ({...action, payload: Object.assign(payload, { id })})
    }

    next(action)
}
