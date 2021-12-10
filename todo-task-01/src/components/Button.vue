<template>
  <button :style="{ background: color }" class="btn" @click="onClick()">
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "Click here",
    },
    color: {
      type: String,
      default: "#ffffff",
    },
  },
  methods: {
    onClick() {
      this.$emit("btn-click");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  user-select: none;
  &:hover {
    opacity: 0.9;
  }
}
</style>
