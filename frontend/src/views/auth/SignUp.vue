<template>
  <div class="signup">
    <h1 class="title">Sign Up</h1>
    <h3 class="sub-title">Welcome to the club!</h3>

    <button class="google-signin">
      <span></span>
      Sign up with Google
    </button>

    <div class="signin-divider">
      <span>or create an account</span>
    </div>

    <TextField name="Username" :required="true" placeholder="someusername" />
    <TextField name="Email" :required="true" placeholder="mail@somedomain.com" />
    <TextField name="Password" :required="true" placeholder="Min. 8 character" />

    <button class="primary-btn">Sign up</button>

    <div>Already registered? <router-link to="/login">Sign in</router-link></div>
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
.signup {
  width: 100%;
  max-width: 352px;
  padding: 0 40px;
  text-align: left;
  display: block;

  .google-signin {
    margin-bottom: 34px;
  }

  .primary-btn {
    margin-top: 18px !important;
  }
}
</style>