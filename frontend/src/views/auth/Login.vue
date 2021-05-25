<template>
  <div class="login">
    <h1 class="title">Login</h1>
    <h3 class="sub-title">Welcome back</h3>

    <button class="google-signin" @click="googleSignin()">
      <span></span>
      Sign in with Google
    </button>

    <div class="signin-divider">
      <span>or Sign In with Email</span>
    </div>

    <TextField name="Email" :required="true" placeholder="mail@somedomain.com" :input.sync="email" />
    <TextField name="Password" :required="true" placeholder="Min. 8 character" :input.sync="password" />

    <div class="remember-forgot">
      <div class="remember-me">
        <input type="checkbox" id="rememberme" name="rememberme" value="Bike" />
        <label for="rememberme">Remember me</label>
      </div>

      <router-link to="/forgot-password">Forgot password?</router-link>
    </div>

    <button class="primary-btn" @click="login()">
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
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
    };
  },
  methods: {
    googleSignin() {
      window.open('https://127.0.0.1:5000/login', 'GoogleLogin', 'width=400,height=600');
    },
    login() {
      alert(`login. email: ${this.email}, password: ${this.password}`);
    },
  },
};
</script>

<style lang="scss">
.login {
  width: 100%;
  max-width: 352px;
  padding: 0 37px;

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