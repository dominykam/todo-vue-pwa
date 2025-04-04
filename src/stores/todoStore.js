import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [
    { id: 1, title: "Clean up my room", description: "Make the bed", date: "2025-01-15", finished: true },
    { id: 2, title: "Water the plants", description: "Don't forget the roses", date: "2025-01-18", finished: false },
    { id: 3, title: "Wash the dishes", description: "Use dish soap!", date: "2025-01-19", finished: true },
    { id: 4, title: "Make lunch", description: "Defrost the chicken", date: "2025-01-16", finished: false },
    ],
            }),
  
  actions: {
    addTodo(newTodo) { //adds new todo to the list
      this.todos.push(newTodo); 
    },

     //mark the todo as completed
     completeTodo(id) { //It searches for the todo by its id and updates the finished property to true
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
          todo.finished = true;
        }
      },
    },
  });


