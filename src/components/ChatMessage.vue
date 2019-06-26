<template lang="pug">
  .bubble(:class= "this.classList")
    .guest__like(
      v-if="!MSG.isSpeaker"
      @click="clickMessageLike(MSG.ID, !like)"
      :class="{ 'guest__like--active' : this.MSG.like}"
      ) {{ this.MSG.likeNumber ? this.MSG.likeNumber : ''}}
    .speaker__img(v-if="MSG.isSpeaker")
      img(:src="this.getSpeaker.pic")
    .guest__message
      .guest__name {{this.MSG.authorName}}
      .guest__text {{this.MSG.text}}
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ChatGuestMessage',
  props: {
    MSG: Object
  },
  computed: {
    ...mapGetters([
      'getSpeaker'
    ]),
    ...mapActions([
      'changeMessageLike'
    ]),
    like() {
      return this.MSG["like"];
    },
    classList() {
      if(this.MSG.isSpeaker) {
        return "speaker"
      } else {
        let guest = "guest";
        if(this.MSG.isQuestion) guest += " guest--question"
        return guest
      }
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
    outline: none;

    &--active {
      background-image: url('../assets/Icon-like-red.svg');
      color: #FFFFFF;
    }
  }
}

</style>
