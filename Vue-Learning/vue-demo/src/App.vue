<template>
  <div id="app">
    <todo-list>
      <input v-model="message" type="text" />
      <input :value="message" @input="handleChange">
      <li>
        <todo-item
          v-for="item of list"
          :title="item.title"
          :deleted="item.deleted"
          @deleted="handleDelete"
          :key="item.title"
        > 
        <template v-slot:pre-icon="{value}">
            <span >前置图标 {{value}}</span>
          </template>

          <template v-slot:suf-icon>
            <span>后置图标</span>
          </template>
        </todo-item>
      </li>
      </todo-list>
  </div>
</template>

<script>


export default {
  name: "App",
  components: {
  },
  data() {
    return {
      message: "hello world",
      list: [
        {
          title: "课程1",
          deleted: true
        },
        {
          title: "课程2",
          deleted: false
        }
      ]
    };
  },
  methods: {
    handleChange(e){
        this.message = e.target.value
      },
    handleDelete(val) {
      console.log(val);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
