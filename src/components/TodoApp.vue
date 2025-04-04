<script>
export default {
    name: "TodoApp",
    props: {
        id: Number,
        title: String,
        date: String,
        description: String,
        finished: Boolean,
    }
}
</script>

<template>
<div class="todo">
    <router-link :to="'/detail/' + id" class="todo">
    <h3>{{ title }}</h3>
    <p> {{ description }}</p>
    <p>{{ date }}</p>
    <div class="todo__status">
    <span v-if="finished">Finished</span>
    <span v-if="!finished">Not finished</span>
</div>
</router-link>
</div>
</template>

<style scoped>
.todo{
    background: rgb(210, 221, 228);
    color: rgb(25, 27, 26);
    text-decoration: none;
}
</style>