<script>
import TodoApp from "@/components/TodoApp.vue";
import { useTodoStore } from "@/stores/todoStore";
import { computed, ref } from "vue";

export default {
  components: { TodoApp },
  setup() {
    const todoStore = useTodoStore(); // Access the store
    const filterStatus = ref("all"); // Default: Show all

    //calculates the list of todos that should be displayed, based on sort and filter
    const filteredTodos = computed(() => { 
      let todos = [...todoStore.todos]; // Get todos from store

     // Filter by status
     if (filterStatus.value === "completed") {
        todos = todos.filter(todo => todo.finished);
      } else if (filterStatus.value === "notCompleted") {
        todos = todos.filter(todo => !todo.finished);
      }

      // Sort by date
      return todos.sort((a, b) => 
        todoStore.sortOrder === "asc" 
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date)
      );
    });

    return {
      todoStore,
      filterStatus,
      filteredTodos,
    };
  },
};
</script>

<template>
  <div class="todo-overview">
    <h1>Todo Overview</h1>

    <!-- Filter and Order Options -->
    <div class="filters">
      <label>Filter by Status:
        <select v-model="filterStatus">
          <option value="all">All Todos</option>
          <option value="completed">Completed</option>
          <option value="notCompleted">Not Completed</option>
        </select>
      </label>

      <label>Sort by:
        <select v-model="todoStore.sortOrder">
          <option value="asc">Oldest First</option>
          <option value="desc">Newest First</option>
        </select>
      </label>
    </div>

    <!-- Show todos-->
    <TodoApp
      v-for="todo in filteredTodos"
      :key="todo.id"
      :id="todo.id"
      :title="todo.title"
      :description="todo.description"
      :date="todo.date"
      :finished="todo.finished"
    />
  </div>
</template>

<style scoped>
.filters{
  display: flex;
  gap: 20px;
  margin-left:5px;
}
</style>
