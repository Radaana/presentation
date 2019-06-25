
<template lang="pug">
    router-link.button-back(to="/")
</template>

<script>
export default {
  name: 'ButtonBack',
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .button-back {
    background: #FFA800;
    width: 100%;
    height: 30px;
    display: block;
    position: relative;

    &::before {
      content: "";
      background: url('../assets/Icon-arrow-down.svg') center no-repeat;
      background-size: 28px 9px;
      height: 9px;
      width: 28px;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
