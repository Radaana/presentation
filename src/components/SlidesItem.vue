
<template lang="pug">
    .slide
      .slide__container
        .slide__image
          img(:src="slide.image")
        .slide__text {{slide.text}}
      .slide__sidebar
        button.slide__link
          .share
        button.slide__link
          .like(:class="{ 'like--active' : slide.like}"  @click="clickLike(slide.ID,!slide.like)" )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SlidesItem',
  computed: {
    ...mapGetters([
    ]),
    ...mapActions([
      'changeSlideLike'
    ]),
  },
  props: {
    slide: Object,
  },
  methods: {
    clickLike(slideID,like) {
      let payload = { slideID,like };
      this.$store.dispatch('changeSlideLike', payload);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.slide {
  border: 1px solid #DADADA;
  padding: 15px 17px;
  display: flex;
  
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &__container {
    flex-grow: 1;
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

  &__image {
    max-width: 86px;
    // max-height: 80px;
    margin-bottom: 13px;

    img {
      width: 100%;
      height: auto;
    }
  }

}

.share {
  width: 18px;
  height: 20px;
  background: url('../assets/Icon-share-black.svg') center no-repeat;
}

.like {
  width: 18px;
  height: 20px;
  background: url('../assets/Icon-like-black.svg') center no-repeat;
  background-size: 18px 20px;

  &--active {
    background-image: url('../assets/Icon-like-red.svg');
  }
}

</style>
