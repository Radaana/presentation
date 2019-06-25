<template lang="pug">
  div#app
    router-view
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  // max-width: 480px;
  // height: 100vh;
  margin: 0 auto;
  font-family: sans-serif;
  display: flex;
  flex-grow: 1;
}
</style>
