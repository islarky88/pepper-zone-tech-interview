<template>
  <div class="home">
    <div></div>
    <div><router-link to="/login">login</router-link> | <router-link to="/signup">signup</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
};
</script>

<style lang="scss">
.home {
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>
