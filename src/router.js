import { createWebHistory, createRouter } from 'vue-router'
import TodoOverview from './pages/TodoOverview.vue'
import TodoDetail from './pages/TodoDetail.vue'
import TextInput from './pages/TextInput.vue'

const routes = [
 { path: '/', component: TodoOverview },  
  { path: '/detail/:id', component: TodoDetail, props: true }, //Props-The parent gives the child data (like a string, a number,etc) so the child can use it,but cant change it.
  { path: '/input', component: TextInput },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;