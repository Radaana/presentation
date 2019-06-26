
<template lang="pug">
  transition(name="menu")
    .slides(v-if="showSlidesList")
      .slides__container
        .slides__title {{getPresentationTitle}}
          button.slides__close(@click="clickClose(!showSlidesList)")
            .close
              .close__bars
        .slides__list
          slides-item(
          v-for="slideItem in this.getSlides"
          :key="slideItem.id" 
          :slide = "slideItem")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import slidesItem from '@/components/SlidesItem.vue'
export default {
  name: 'SlidesList',
  components: {
    slidesItem,
  },
  computed: {
    ...mapGetters([
      'getSlidesListAppearance',
      'getPresentationTitle',
      'getSlides'
    ]),
    ...mapActions([
      'changeSlidesListAppearance'
    ]),
    showSlidesList() {
      return this.getSlidesListAppearance
    },
  },
  methods: {
    clickClose(flag) {
      this.$store.dispatch('changeSlidesListAppearance', flag);
      document.querySelector('body').setAttribute("style",  "")
      document.querySelector('.slides').setAttribute("style",  "")
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.slides {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1500;
  width: 100%;
  height: 100%;
  max-height: 100%;

  &__list {
    overflow-y: scroll;
  }

  &__container {
    background-color: #fff;
    top: 0;
    right: 0;
    left: 10%;
    // bottom: 0;
    z-index: 2000;
    width: 90%;
    position: absolute;
    padding: 20px 32px;
    
  }


  &__title {
    color: #000000;
    font-size: 17px;
    position: relative;
    margin-bottom: 20px;
  }

  &__close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    display: block;
    background: none;
    border: none;
  }
}

.close {
  position: relative;
  display: flex;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  align-items: center;
  padding: 0;
}

.close__bars {
  &:before,
  &:after {
      width: 20px;
      height: 2px;
      transition: transform .3s;
      border-radius: 0;
      background: #000;
  }

  &:before,
  &:after {
      position: absolute;
      display: block;
      content: '';
      top: 50%;
  }

  &:before {
      transform: rotate(45deg);
  }

  &:after {
      transform: rotate(-45deg);
  }
}

.menu-enter-active {
  transition: all .5s ease;
}
.menu-leave-active {
  // transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  transition: all .3s ease-out;
}
.menu-enter, .menu-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


</style>
