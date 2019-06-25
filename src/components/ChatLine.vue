<template lang="pug">
  .chat-line(ref="chatline")
    chat-thread(
      v-for="speakerMSG in this.getSpeakerMessages"
      :key="speakerMSG.id"
      :speakerMSG="speakerMSG"
    )
</template>

<script>
import { mapGetters} from 'vuex'
import chatThread from '@/components/ChatThread.vue'
export default {
  name: 'ChatLine',
  components: {
    chatThread
  },
  props: {
    surveysHeight: Number,
  },
  computed: {
    ...mapGetters([
      'getSpeakerMessages'
    ]),
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

  h2 {
    margin: 0;
  }
}


</style>
