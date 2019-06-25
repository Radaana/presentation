<template lang="pug">
  .home
    .content
      survey
      chat-line
      bottom-nav
    slides-list
</template>

<script>
// @ is an alias to /src
import survey from '@/components/Survey.vue'
import chatLine from '@/components/ChatLine.vue'
import bottomNav from '@/components/BottomNav.vue'
import slidesList from '@/components/SlidesList.vue'

export default {
  name: 'home',
  components: {
    survey,
    chatLine,
    bottomNav,
    slidesList
  },
}
</script>

<style lang="scss">

*, *::before, *::after {
    box-sizing: border-box;
}

html, body {
  width: 100%;
  height: auto;
  min-height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-grow: 1;
}

body, .home, .content { 
  display: flex;
  flex-grow: 1;
}

.content {
  position: relative;
}


</style>
