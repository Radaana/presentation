<template lang="pug">
  .guest__container
    .guest__like(
      @click="clickMessageLike(guestMSG.ID, !like)"
      :class="{ 'guest__like--active' : this.guestMSG.like}"
      ) {{ this.guestMSG.likeNumber ? this.guestMSG.likeNumber : ''}}
    .guest__message
      .guest__name {{this.guestMSG.authorName}}
      .guest__text {{this.guestMSG.text}}
        
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ChatGuestMessage',
  props: {
    guestMSG: Object
  },
  computed: {
    ...mapGetters([
      'getCommentsToSpeakerMSG',
    ]),
    ...mapActions([
      'changeMessageLike'
    ]),
    like() {
      return this.guestMSG["like"];
    }
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

.bubble {
  min-height: 50px;
  padding: 16px;
  position: relative;
  font-size: 14px;
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
