<template>
  <div>
    <nav-bar></nav-bar>
  	<router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    NavBar
  }
}
</script>

<style>
.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}
</style>
