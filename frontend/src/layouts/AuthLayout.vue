<template>
  <div id="auth">
    <div class="left">
      <span class="mini-logo"></span>
      <router-view />
      <span class="copyright">© 2021 E2BS SA</span>
    </div>
    <div class="right">
      <span class="bg-icon"></span>
      <span class="mini-logo-dark"></span>
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
      left: 80px;
      background: url('~@/assets/logo-dark.png') no-repeat;
      background-size: contain;
      width: 95px;
      height: 33px;
    }

    .copyright {
      position: absolute;
      bottom: 20px;
      left: 80px;
      font-size: 10px;
      color: #b7b7b7;
    }
  }

  .right {
    flex: 50%;
    position: relative;
    .bg-icon {
      background: url('~@/assets/bg-auth.svg') no-repeat;
      background-size: cover;
      background-color: $dark-color;
      width: 100%;
      min-height: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }

    .mini-logo-dark {
      position: absolute;
      top: 15px;
      left: 17px;
      background: url('~@/assets/logo.png') no-repeat;
      background-size: contain;
      width: 95px;
      height: 33px;
      display: none;
    }
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

/* ----- RESPONSIVENESS ----- */

@media (min-width: 2561px) and (max-width: 5000px) and (orientation: landscape) {
}
@media (min-width: 1921px) and (max-width: 2560px) and (orientation: landscape) {
}

@media (max-width: 1536px) and (orientation: landscape) {
}

@media (max-width: 1366px) and (orientation: landscape) {
}

@media (max-width: 1280px) and (orientation: landscape) {
}

@media (max-width: 1023.98px) {
}

@media (max-width: 1023.98px) and (orientation: landscape) {
}

@media (max-width: 900px) {
}

@media (max-width: 767.98px) {
}

@media (max-width: 575.98px) {
  #auth {
    display: flex;
    height: 100%;
    flex-direction: column;
    width: 100%;

    .mini-logo-dark {
      display: inline;
    }
    .mini-logo {
      display: none;
    }

    .left {
      order: 2;
      // padding: 80px 0;
      height: 100vh;
      padding-bottom: 70px;

      .copyright {
        left: 37px;
      }
    }
    .right {
      order: 1;
      display: block;
      width: 100%;
      min-height: 533px;

      .bg-icon {
        background: url('~@/assets/bg-auth-mobile.svg') no-repeat;
        background-color: $cream-color;
        background-size: 100%;
      }

      .mini-logo-dark {
        display: block;
      }
    }
  }
}

@media (max-width: 374.98px) {
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1112px) and (orientation: portrait) {
}
</style>