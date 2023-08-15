<template>
  <router-view />
</template>

<script>
export default {
  async mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss">
html,
body {
  height: fit-content;
  overflow-x: hidden;

  .h-100 {
    height: 100vh;
    height: var(--tg-viewport-stable-height);
  }
}

#app {
  width: 100%;
  height: fit-content;
  top: 0;
  left: 0;
  -webkit-overflow-scrolling: touch;

}
</style>
