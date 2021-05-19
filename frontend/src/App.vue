<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'Rubik';
  src: local('Rubik'), url(./assets/fonts/Rubik/Rubik-Regular.ttf) format('truetype');
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Rubik', Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
