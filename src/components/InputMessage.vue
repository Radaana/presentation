
<template lang="pug">
    .input-message(ref="input")
      form.form
        router-link.form__back(to="/")
        input.form__input(type="text" autofocus)
        button.form__submit(type="submit")
</template>

<script>
export default {
  name: 'InputMessage',
  methods: {
    sendHeight() {
      let style = "padding-bottom:" + (this.$refs.input.offsetHeight + 16) + "px;";
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
.input-message {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 44px;
  background-color: #fff;
  z-index: 100;
}
.form {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;

  &__back {
    height: 100%;
    width: 35px;
    padding: 0;
    background-image: url('../assets/Icon-arrow-left.svg');
    background-repeat: no-repeat;
    background-position: 13px 11px;
    background-color: #fff;
    border: none;
    display: block;
  }
  &__input {
    border: 1px solid #C8C7CC;
    border-radius: 100px; 
    padding: 5px 38px 5px 18px;
    flex-grow: 1;
    margin-right: 13px;
    font-size: 16px;
  }
  &__submit {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    padding: 0;
    // background-image: url('../assets/Icon-like-red.svg');
    
    // background-size: 20px 20px;
    border: none;
    background-color: #fff;

    &::before {
      content: "";
      border: 10px solid transparent;	border-left: 10px solid #000;
      padding: 0;
      position: absolute;
      top:0;
    }
    &::after {
      content: "";
      width: 8px;
      height: 5px;
      background-color: #000;
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 3px;
    }
  }
}

</style>
