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
        <label for="vehicle1">Remember me</label>
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
        cursor: pointer;
      }

      label {
        padding-left: 7px;
        font-weight: 300;
        color: $grey-color;
        cursor: pointer;
      }
    }
  }
}
</style>