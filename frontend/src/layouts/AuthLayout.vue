<template>
  <div id="auth">
    <div class="left">
      <span class="mini-logo"></span>
      <router-view />
      <span class="copyright">© 2021 E2BS SA</span>
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
    .copyright {
      position: absolute;
      bottom: 20px;
      left: 139px;
      font-size: 10px;
      color: #b7b7b7;
    }
  }

  .right {
    background: url('~@/assets/bg-auth.svg') no-repeat;
    background-size: cover;
    background-color: $dark-color;
    flex: 50%;
  }

  .title {
    margin-bottom: 8px;
  }
  .sub-title {
    margin-bottom: 34px;
  }

  .google-signin {
    width: 100%;
    height: 44px;
    border-radius: 22px;
    background: transparent;
    border: 1px solid $grey-color;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
    transition: 0.2s;
    margin-bottom: 34px;

    font-family: Rubik;
    font-weight: normal;
    font-size: 12px;

    color: #1b1b1b;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: $dark-color;
      color: #fff8e7;
    }

    span {
      color: red;
      &::before {
        content: '';
        display: block;
        margin-right: 16px;
        background: url('~@/assets/google-icon.png') no-repeat;
        background-size: cover;
        width: 24px;
        height: 24px;
      }
    }
  }

  .signin-divider {
    font-family: Rubik;
    font-weight: 300;
    font-style: italic;
    font-size: 10px;
    text-align: center;
    color: $grey-color;
    margin-bottom: 29px;
    border-bottom: 1px solid $grey-color;
    z-index: 5;

    position: relative;
    span {
      position: absolute;
      top: -5px;
      left: calc((100% - (125px)) / 2);
      width: 125px;
      display: inline-block;
      background-color: $cream-color;
      z-index: 1;
    }
  }

  .primary-btn {
    width: 100%;
    height: 44px;
    border-radius: 22px;
    background: transparent;
    border: 1px solid $primary-color;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
    transition: 0.2s;
    font-size: 12px;
    text-align: center;
    color: #fff8e7;
    margin-bottom: 21px;
    background-color: $primary-color;

    &:hover {
      background-color: $dark-color;
      border: 1px solid $dark-color;
    }
  }
}
</style>