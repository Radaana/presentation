<template lang="pug">
  .survey(ref="survey")
    .survey__container
      h3.survey__title {{this.getActiveSurvey.question}}
      form.survey__form
        .survey__input(v-for="(item, index) in this.getActiveSurvey.answers")
            label.survey__label
              input.survey__switch(type="radio" name="activeSurvey" :value="item" :id="index" 
               @change="updateRadioButton(item)")
              span.survey__radio
              span.survey__text {{item}}
    .survey__sidebar
      button.survey__link(@click="clickBurger(!showSlidesList)")
        .hamburger-menu
          .hamburger-menu__bars
      button.survey__link
        .share
      button.survey__link
        .like(:class="{ 'like--active' : this.getActiveSurvey.like}"  @click="clickLike(!activeSurveyLike)" )
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
export default {
  name: 'Survey',
  data: () => {
    return {
       msg: 'Survey Cont'
    }
  },
  computed: {
    ...mapGetters([
      'getActiveSurvey',
      'getSlidesListAppearance'
    ]),
    ...mapActions([
      'changeLike',
      'changeAnswer'
    ]),
    activeSurveyLike() {
      return this.getActiveSurvey["like"]
    },
    showSlidesList() {
      return this.getSlidesListAppearance
    },
  },
  methods: {
    clickLike(like) {
      this.$store.dispatch('changeLike', like)
    },
    clickBurger(flag) {
      this.$store.dispatch('changeSlidesListAppearance', flag).then( () => {
        document.querySelector('body').setAttribute("style",  "overflow: hidden; position: fixed;");
        document.querySelector('.slides').setAttribute("style",  "overflow-y: scroll;")
      });
      
    },
    updateRadioButton(answer) {
      this.$store.dispatch('changeAnswer', answer)
    },
    sendHeight() {
      let style = "padding-top:" + (this.$refs.survey.offsetHeight + 16) + "px;";
      let chatline = document.querySelector('.chat-line');
      let css = chatline.getAttribute('style') ? chatline.getAttribute('style') + style : style;
      chatline.setAttribute("style",  css);
      // chatline.style.paddingTop = (this.$refs.survey.offsetHeight + 16) + "px;"
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

<style scoped lang="scss">
.survey {
  background: #FFA800;
  padding: 16px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  &__container {
    padding-right: 16px;
    flex-grow: 1;
    text-align: left;
  }

  &__sidebar {
    width: 18px;
    flex-shrink: 0;
  }

  &__title {
    color: #000000;
    font-family: sans-serif;
    font-size: 17px;
    line-height: 20px;
    margin: 0 0 6px 0;
  }

  &__link {
    display: block;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  &__form {
    display: flex;
  }

  &__input {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  &__label {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__switch {
    display: none;
  }

  &__radio {
      position: relative;
      width: 26px;
      height: 26px;
      background-color: #fff;
      border-radius: 50%;
      display: inline-block;
      vertical-align: middle;
      margin-bottom: 6px;
  }

  &__switch:checked + &__radio::before {
    content: "";
    display: block;
    position: absolute;

    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 5px;
    background:  #007AFF;
    border-radius: 50%;
  } 

  &__text {
    font-size: 12px;
  }
}

.hamburger-menu {
  position: relative;
  display: flex;
  width: 18px;
  height: 12px;
  cursor: pointer;
  vertical-align: middle;
  align-items: center;
}

.hamburger-menu__bars {
  &,
  &:before,
  &:after {
      width: 18px;
      height: 2px;
      transition: transform .3s;
      border-radius: 0;
      background: #fff;
  }

  &:before,
  &:after {
      position: absolute;
      display: block;
      content: '';
  }

  &:before {
      top: 0;
  }

  &:after {
      bottom: 0;
  }
}

.share {
  width: 18px;
  height: 20px;
  background: url('../assets/Icon-share.svg') center no-repeat;
}

.like {
  width: 18px;
  height: 20px;
  background: url('../assets/Icon-like.svg') center no-repeat;
  background-size: 18px 20px;

  &--active {
    background-image: url('../assets/Icon-like-white.svg');
  }
}

</style>
