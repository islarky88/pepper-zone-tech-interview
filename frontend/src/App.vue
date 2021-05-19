<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    console.log('ready');
  },
};
</script>
<style lang="scss">
// CSS reset
html,
body,
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

// main CSS

#app {
  font-family: 'Rubik', sans-serif;
  color: $dark-color;
  font-size: 12px;

  h1 {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 37px;
  }

  h3 {
    font-family: Rubik;
    font-style: normal;
    font-size: 20px;
    font-weight: 300;
  }
  h4 {
    font-family: Rubik;
    font-weight: normal;
    font-size: 12px;
    text-align: left;
    color: #1b1b1b;
  }

  a:link,
  a:visited {
    text-decoration: none;
    color: $primary-color;
  }
  a:hover {
    text-decoration: underline;
    color: $primary-color;
  }
}
</style>
