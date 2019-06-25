<template lang="pug">
  .chat-thread
    .bubble.speaker
      .speaker__img
          img(:src="this.getSpeaker.pic")
      .speaker__message
        .speaker__name {{this.getSpeaker.name}}
        .speaker__text {{this.speakerMSG.text}}
        
    chat-guest-message.bubble.guest(
      v-for="guestMSG in this.getTread"
      :key="guestMSG.id" 
      :class="{ 'guest--question' : guestMSG.isQuestion}"
      :guestMSG = "guestMSG"
    )
        
</template>

<script>
import chatGuestMessage from '@/components/ChatGuestMessage.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ChatThread',
  props: {
    speakerMSG: Object
  },
  components: {
    chatGuestMessage
  },
  computed: {
    ...mapGetters([
      'getCommentsToSpeakerMSG',
      'getSpeaker'
    ]),
    ...mapActions([
      'changeMessageLike'
    ]),
    getTread() {
      return this.getCommentsToSpeakerMSG(this.speakerMSG.ID)
    },
  },
  methods: {
    clickMessageLike(messageID,like) {
      let payload = { messageID,like }
      this.$store.dispatch('changeMessageLike', payload)
    },
  }
}
</script>

<style scoped lang="scss">

.chat-thread {
  &:not(:first-child) {
    margin-top: 16px;
  }
}

.bubble {
  min-height: 50px;
  padding: 16px;
  position: relative;
  font-size: 14px;
}
.speaker {
  background: #D0E7FF;
  border-radius: 0px 10px 10px 0px;
  margin: 0 35px 15px 0;



  &__img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: 8px;
    right : -14px;

    img {
      width: 100%;
    }
  }
  &__name {
    color: #858E99;
    font-size: 11px;
    line-height: 13px;
    margin-bottom: 8px;

    &::before {
      content: 'Спикер - ';
      color: inherit;
      font-size: inherit;
    }
  }
}

.guest {
  margin-left: 51px;
  background: #FFFFFF;
  border-radius: 10px 0px 0px 10px;
  padding-left: 24px;

  &:not(:last-child) {
      margin-bottom: 15px;
  }

  &--question {
    background: none;
    border: 1px dashed #000000;
    border-right: none; 
  }
  
  &__name {
    color: #858E99;
    font-size: 11px;
    line-height: 13px;
    margin-bottom: 8px;
  }

  &__like {
    width: 30px;
    height: 28px;
    background: url('../assets/Icon-like-grayborder.svg') center no-repeat;
    background-size: contain;
    position: absolute;
    left: -15px;
    top: 10px;
    text-align: center;
    line-height: 28px;
    color: #858E99;
    font-size: 12px;  

    &--active {
      background-image: url('../assets/Icon-like-red.svg');
      color: #FFFFFF;
    }
  }
}

</style>
