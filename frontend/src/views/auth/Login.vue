<template>
  <div class="login">
    <h1 class="title">Login</h1>
    <h3 class="sub-title">Welcome back</h3>

    <button class="google-signin">
      <span></span>
      Sign in with Google
    </button>

    <div class="signin-divider">
      <span>or Sign In with Email</span>
    </div>

    <TextField name="Email*" />
    <TextField name="Password*" />

    <div class="remember-forgot">
      <div class="remember-me">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label for="vehicle1"> I have a bike</label>
      </div>

      <router-link to="/forgot-password">Forgot password?</router-link>
    </div>

    <button class="primary-btn">
      <span>Login</span>
    </button>

    <div>Not registered yet? <router-link to="/signup">Create an Account</router-link></div>
  </div>
</template>

<script>
import TextField from '@/components/forms/TextField.vue';
export default {
  components: {
    TextField,
  },
};
</script>

<style lang="scss">
.login {
  width: 100%;
  padding: 0 184px 0 139px;
  text-align: left;
  display: block;

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
    border: 1px solid $dark-color;
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

  .remember-forgot {
    display: flex;
    justify-content: space-between;
    margin-top: 26px;
    margin-bottom: 22px;
    font-size: 10px;

    .remember-me {
      display: flex;
      align-items: center;

      input[type='checkbox'] {
        margin: 0;
        width: 15px;
        height: 15px;
        background: transparent;
        border: 1px solid $grey-color;
      }

      label {
        padding-left: 7px;
        font-weight: 300;
        color: $grey-color;
      }
    }
  }

  .primary-btn {
    width: 100%;
    height: 44px;
    border-radius: 22px;
    background: transparent;
    border: 1px solid $dark-color;
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
    }
  }
}
</style>