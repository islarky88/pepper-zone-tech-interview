<template>
  <div class="text-field">
    <h4>{{ name }}</h4>
    <input type="text" placeholder="mail@somedomain.com" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
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
    width: calc(100% - (27px * 2));
    height: 44px;
    padding: 0 27px;
    border-radius: 22px;
    background: transparent;
    border: 1px solid $grey-color;
  }
}
</style>