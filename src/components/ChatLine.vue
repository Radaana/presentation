<template lang="pug">
  .chat-line(ref="chatline")
    chat-message(
      v-for="MSG in this.getTread"
      :key="MSG.id" 
      :MSG = "MSG"
    )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import chatMessage from '@/components/ChatMessage.vue'
export default {
  name: 'ChatLine',
  components: {
    chatMessage
  },
  props: {
    surveysHeight: Number,
  },
  computed: {
    ...mapGetters([
      'getAllMessages',
    ]),
    ...mapActions([
      'changeMessageLike'
    ]),
    getTread() {
      return this.getAllMessages
    },
  },
  methods: {
    attachPadding () {
      let style = "padding-top:" + this.surveysHeight + "px";
      document.querySelector('.chat-line').setAttribute("style", style);
    }
  },
}
</script>

<style scoped lang="scss">

.chat-line {
  background: #EFEFF4;
  height: 100%;
  padding-top: 16px;
}


</style>
