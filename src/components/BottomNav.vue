<template lang="pug">
  .bottom-nav(ref="bottom")
    router-link.bottom-nav__link.bottom-nav__link--comment(to="/comments") Комментарий
    router-link.bottom-nav__link.bottom-nav__link--question(to="/questions") Вопрос
</template>

<script>
export default {
  name: 'BottomNav',
  methods: {
    sendHeight() {
      let style = "padding-bottom:" + (this.$refs.bottom.offsetHeight + 16) + "px;";
      let chatline = document.querySelector('.chat-line');
      let css = chatline.getAttribute('style') ? chatline.getAttribute('style') + style : style;
      chatline.setAttribute("style",  css);
    }
  },
    mounted() {
    this.sendHeight();
  },
  updated() {
    this.sendHeight();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bottom-nav {
  background: #FFFFFF;
  padding: 16px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3) {
      height: 80px;
     }

  &__link {
    display: block;
    height: 28px;
    width: 50%;
    line-height: 28px;
    color: #FFA800;
    text-align: center;
    text-decoration: none;
    font-size: 13px;
    border: 1px solid #FFA800;

    &--comment {
      border-radius: 5px 0 0 5px;
      border-right: none;
    }
    &--question {
      border-radius: 0 5px 5px 0;
    }
    &:active {
      background-color: #FFA800;
      color: #FFF;
    }
  }
}

</style>