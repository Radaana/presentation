<template lang="pug">
  .questions.chat-line
    button-back
    .questions__title Все  вопросы:
    .questions__thread
      chat-guest-message.bubble.guest(
        v-for="guestMSG in this.getGuestQuestions"
        :key="guestMSG.id" 
        :class="{ 'guest--question' : guestMSG.isQuestion}"
        :guestMSG = "guestMSG" )
    input-message

</template>
<script>
import buttonBack from '@/components/ButtonBack.vue'
import chatGuestMessage from '@/components/ChatGuestMessage.vue'
import inputMessage from '@/components/InputMessage.vue'
import { mapGetters} from 'vuex'
export default {
  name: 'Questions',
  components: {
    buttonBack,
    chatGuestMessage,
    inputMessage
  },
  computed: {
    ...mapGetters([
      'getGuestQuestions'
    ]),
  },
  methods: {},
  mounted() {
    window.scrollTo(window.scrollX, window.scrollY);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .questions {
    background: #EFEFF4;
    position: relative;
    // flex-grow: 1;
    // display: flex;
    // flex-direction: column;
    min-height: calc(100vh-80px);
    width: 100%;

    &__title {
      color: #858E99;
      font-size: 17px;
      text-align: center;
      padding: 14px 0 10px;
    }
  }
</style>
