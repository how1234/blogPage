<template>
  <div>
      Vue基础
      <div>
          <router-link to="/basic/tltdemo">指令，插值，以及动态属性</router-link> <br/>
         
          <router-link to="/basic/computedDemo">Computed</router-link> <br/>

          <router-link to="/basic/watchDemo">Watch</router-link> <br/>

          <router-link to="/basic/classDemo">Class Style</router-link> <br/>

          <hr/>
          <div>          
          <router-view></router-view>
          </div>
      </div>
      
  </div>
</template>

<script>

export default {
    name:"VueBasic"
}
</script>

<style>

</style>