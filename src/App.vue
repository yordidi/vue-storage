<template>
  <div>
  	<router-view></router-view>
    
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
    }
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
