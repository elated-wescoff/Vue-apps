<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList,
  }
}
</script>

<template>
  <h1> TODO LIST </h1>
  <TodoList :newTodo="newTodo" :editing="editing" />
</template>

<style scoped>
h1{
  text-align: center;
}
body{
  display: inline-block;
}
template{
  display: block;
}
</style>
