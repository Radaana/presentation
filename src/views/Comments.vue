<template lang="pug">
  .comments.chat-line(ref="chatline")
    button-back
    .comments__title Все  комментарии:
    .comments__thread
      chat-message.bubble.guest(
        v-for="guestMSG in this.getGuestComments"
        :key="guestMSG.id" 
        :MSG = "guestMSG")
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
      'getGuestComments'
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
  .comments {
    flex-grow: 1;
    background: #EFEFF4;
    position: relative;
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
