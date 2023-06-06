import {TODO_ADD,TODO_DELETE,TODO_COMPLETE} from './action.types'

export default (state,action) => {
    switch (action.type) {
        case TODO_ADD:
            return [...state,action.payload]
        case TODO_DELETE:
            return state.filter(todo => todo.id !== action.payload.id)
        case TODO_COMPLETE:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        id: todo.id,
                        todoString: todo.todoString,
                        isComplete: true
                    }
                }
                return todo
            })
        default:
            return state
    }
}