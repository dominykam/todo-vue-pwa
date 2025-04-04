<script>
import { useRoute } from "vue-router";
import { useTodoStore } from "@/stores/todoStore";
import { computed } from "vue";

export default {
  name: "TodoDetailPage",  // Update to multi-word component name
  setup() {
    const route = useRoute();
    const todoStore = useTodoStore();

    /// Find the todo based on route ID
    const todo = computed(() => {
      return todoStore.todos.find((t) => t.id == route.params.id); //It checks each todo and returns the one with the matching id
    });

    // Method to complete the task
    const completeTask = () => {
      if (todo.value) {
        todoStore.completeTodo(todo.value.id); // Mark as completed in the store
      }
    };

    return { todo, completeTask };
  },
};
</script>


<template>
  <div v-if="todo"> <!--if todo exists- it shows this:-->
    <h1>{{ todo.title }}</h1>
    <p><strong>Description:</strong> {{ todo.description }}</p>
    <p><strong>Date:</strong> {{ todo.date }}</p>
    <p><strong>Status:</strong> {{ todo.finished ? "Finished" : "Not finished" }}</p>

    <!-- Complete button -->
    <button v-if="!todo.finished" @click="completeTask">Complete</button> <!--if to do is not finished-complete button is shown-->
  </div>
</template>

