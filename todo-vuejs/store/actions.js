// store/actions.js

export default {
    addTask ({commit}, newTodo) {
        commit('addTask', newTodo)
    },
    deleteTodo ({commit}, item) {
        commit('deleteTodo', item)
    },
    doneEdit ({commit}, item) {
        commit('doneEdit', item)
    }
}
