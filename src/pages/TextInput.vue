<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useTodoStore } from "@/stores/todoStore"; // Import store

export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      title: '',
      description: '',
      date: null,
    };
  },
  methods: {
    addTodo() {
    const todoStore = useTodoStore(); // Access the store

    //Format the date to yyyy-MM-dd 
    const formattedDate = this.date ? this.date.toISOString().split('T')[0] : null;

      // Create a new todo object
      const newTodo = {
        title: this.title,
        description: this.description,
        date: formattedDate,
        finished: false, // Default state
      };

      todoStore.addTodo(newTodo); // todo is added to the store

      // Reset input fields after adding a new task
      this.title = "";
      this.description = "";
      this.date = null;
    },
  },
};
</script>

<template>
  <div class="todo-input">
    <h1>Add New Todo</h1>
    <form @submit.prevent="addTodo">
      <p class="inputField"> Title</p>
      <input type="text" v-model="title" id="title" required />

      <p class="inputField"> Description</p>
      <input type="text" v-model="description" id="description" required />

      <p class="inputField"> Date</p>
      <Datepicker class="datePicker" 
        v-model="date" 
        :enable-time-picker="false" 
        :format="'yyyy-MM-dd'" 
        required
      />

      <button type="submit">Add Todo</button>
    </form>
  </div>
</template>



<style scoped>
.todo-input {
  background: rgb(210, 221, 228);
  padding: 20px;
  
}
input {
  margin-bottom: 10px;
  display: block;
}

.inputField{
  font-weight: bold;
  margin-bottom:10px;
}

.datePicker{
  width:180px;
  margin-bottom:20px;
}
</style>

  