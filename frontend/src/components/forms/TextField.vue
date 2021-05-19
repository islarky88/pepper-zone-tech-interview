<template>
  <div class="text-field">
    <h4>{{ name }}{{ required ? '*' : '' }}</h4>
    <input type="text" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.text-field {
  font-family: Rubik;
  font-weight: normal;
  font-size: 12px;
  text-align: left;
  color: #1b1b1b;
  margin-bottom: 13px;

  h4 {
    margin-bottom: 5px;
  }
  input {
    outline: none;
    width: 100%;
    height: 44px;
    padding: 0 27px;
    border-radius: 22px;
    box-sizing: border-box;
    background: transparent;
    border: 1px solid $grey-color;
    transition: 0.6s;

    &:focus {
      border: 1px solid $dark-color;
    }
  }
}
</style>