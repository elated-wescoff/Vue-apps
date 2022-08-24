// store/getter.js

export default {
  notDone(state) {
      return state.todos.filter(todo => {
        return todo.completed === true;
      }).length;
    },
  Done(state) {
      return state.todos.filter(todo => {
        return todo.completed === false;
      }).length;
  },
  allTasks(state){
      return state.todos.length
  },
}
