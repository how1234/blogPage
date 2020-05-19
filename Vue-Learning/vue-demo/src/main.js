import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import ToDoList from './components/ToDoList'
import ToDoItem from './components/ToDoList'
Vue.component("todo-list",ToDoList)
Vue.component("todo-item",ToDoItem)
new Vue({
  render: h => h(App),
}).$mount('#app')
