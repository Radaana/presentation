
<template lang="pug">
    .input-message(ref="input")
      form.form
        router-link.form__back(to="/")
        input.form__input(type="text" ref="field" v-model="inputText" @focus="inputFocus()" @blur="inputBlur()")
        button.form__submit(type="submit" @click.prevent="inputSubmit()" ref="submit" @focus.stop="submitFocus()" )
        transition(name="message")
          .form__message(v-show="showMessage") Сообщение отправлено
</template>

<script>
import {mapActions } from 'vuex'
export default {
  name: 'InputMessage',
  data() {
    return {
      inputText: '',
      showMessage: false,
    }
  },
  computed: {
  ...mapActions([
    'addGuestMessage'
  ]),
  },
  methods: {
    sendHeight() {
      let style = "padding-bottom:" + (this.$refs.input.offsetHeight + 16) + "px;";
      let chatline = document.querySelector('.chat-line');
      chatline.setAttribute("style",  style);
    },
    inputSubmit() {
      if(this.inputText) {
        this.$refs.submit.setAttribute("disabled",  "disabled");
        this.showMessage = true;
        let isQuestion = this.$route.path == '/questions';
        let text = this.inputText;
        let payload = { text,isQuestion };
        this.$store.dispatch('addGuestMessage', payload).then( () => {
          window.scrollTo(0, document.querySelector('.chat-line').offsetHeight);
          
          setTimeout(()=> {
            this.showMessage = false;
            this.$refs.submit.removeAttribute("disabled");
          }, 1500)
          
        });
        this.inputText = '';
      }
    },
    inputFocus() {
      window.scrollTo(0, (document.querySelector('.chat-line').offsetHeight - window.innerHeight) );
      document.querySelector('.chat-line').addEventListener('touchmove', this.preventScrolling(event), false);
    },
    inputBlur() {
      document.querySelector('.chat-line').removeEventListener('touchmove', this.preventScrolling(event), false);
      window.scrollTo(0, (document.querySelector('.chat-line').offsetHeight + this.$refs.input.offsetHeight) );
    },
    submitFocus() {},
    preventScrolling(event) {
      if (event.targetTouches.length === 1) {
        event.preventDefault();
      }
    },
  },
  mounted() {
    this.sendHeight();
    this.$refs.field.focus();
    window.scrollTo(0, (document.querySelector('.chat-line').offsetHeight - this.$refs.input.offsetHeight) ); 
  },
  updated() {
    this.sendHeight();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input-message {
  // position: absolute;
  position: fixed;
  margin-top: auto;
  bottom: 0;
  left: 0;
  right: 0;
  height: 51px;
  background-color: #fff;
  z-index: 1000;

  &.move {
    bottom: -60px;
    position: absolute;
  }
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
    background-position: 13px center;
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
    height: 35px;
  }
  &__submit {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 26px;
    height: 26px;
    padding: 0;
    background-image: url('../assets/Icon-arrow-up.svg');
    background-size: 25px 25px;
    background-repeat: no-repeat;
    border: none;
    background-color: #fff;
  }
  &__message {
    position: absolute;
    font-size: 12px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #FFA800;
  }
}

.message-enter-active {
  transition: all .5s ease;
}
.message-leave-active {
  transition: all .5s ease;
}
.message-enter, .message-leave-to {
  transform: translateX(100);
  opacity: 0;
}


</style>
