<template>
  <div id="auth">
    <div class="left">
      <span class="mini-logo"></span>
      <router-view />
    </div>
    <div class="right">
      <span class="bg-icon"></span>
    </div>
  </div>
</template>
<style lang="scss">
#auth {
  display: flex;
  height: 100vh;
  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $cream-color;
    flex: 50%;
    position: relative;

    .mini-logo {
      position: absolute;
      top: 41px;
      left: 122px;
      background: url('~@/assets/logo-dark.png') no-repeat;
      background-size: contain;
      width: 95px;
      height: 33px;
    }
  }
  .right {
    background: url('~@/assets/bg-auth.svg') no-repeat;
    background-size: 100% 100%;
    background-color: $dark-color;
    flex: 50%;
  }
}
</style>