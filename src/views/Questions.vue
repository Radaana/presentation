<template lang="pug">
  .questions.chat-line(ref="chatline")
    button-back
    .questions__title Все  вопросы:
    .questions__thread
      chat-message.bubble.guest(
        v-for="guestMSG in this.getGuestQuestions"
        :key="guestMSG.id" 
        :class="{ 'guest--question' : guestMSG.isQuestion}"
        :MSG = "guestMSG" )
    input-message

</template>
<script>
import buttonBack from '@/components/ButtonBack.vue'
import chatMessage from '@/components/ChatMessage.vue'
import inputMessage from '@/components/InputMessage.vue'
import { mapGetters} from 'vuex'
export default {
  name: 'Questions',
  components: {
    buttonBack,
    chatMessage,
    inputMessage
  },
  computed: {
    ...mapGetters([
      'getGuestQuestions'
    ]),
  },
  methods: {},
  mounted() {
    window.scrollTo(0, this.$refs.chatline.offsetHeight); 
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .questions {
    background: #EFEFF4;
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    &__title {
      color: #858E99;
      font-size: 17px;
      text-align: center;
      padding: 14px 0 10px;
    }
  }
</style>
