<template>
  <button
    class="
      uppercase
      h-12
      mt-3
      text-black
      font-bold
      w-full
      border
      rounded
      bg-white
      hover:bg-blue-400
    "
    v-on:click="signInWithApple"
  >
    Apple
  </button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["signInWithApple"]),
  },
};
</script>