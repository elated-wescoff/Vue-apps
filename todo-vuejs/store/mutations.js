// store/mutations.js

export default {
    addTask (state, newTodo) {
        if (newTodo.length) {
            state.todos.push({
                title: newTodo,
                completed: false
            })
            state.newTodo = ''
        }
    },
    deleteTodo (state, item) {
        const index = state.todos.indexOf(item)
        state.todos.splice(index, 1)
    },
    doneEdit (state) {
        state.editing = null
    }
}
