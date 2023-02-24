<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    let foo = document.createElement('script');
    foo.setAttribute("src", "https://telegram.org/js/telegram-web-app.js");
    document.head.appendChild(foo);

<<<<<<< HEAD
=======
    let nopinch = document.createElement('meta');
    nopinch.setAttribute("name", "viewport");
    nopinch.setAttribute("content", "width=device-width, user-scalable=no");
    document.head.appendChild(nopinch);

>>>>>>> refs/remotes/origin/master
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

#app {
  width: 100%;
  top: 0;
  left: 0;
  -webkit-overflow-scrolling: touch;
  transform: translate3d(0, 0, 0);
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  margin-left: 1rem;
}
</style>
