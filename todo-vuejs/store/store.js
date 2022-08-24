// store/store.js

import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getter from './getter'


const LOCAL_STORAGE_KEY = 'todo-app'

const store = createStore({
  state: {
      title: "Vuex Store",
      todos: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [],
      newTodo: null,
      editing: null,
  },
  mutations: mutations,
  getters: getter,
  actions: actions
});

export default store
