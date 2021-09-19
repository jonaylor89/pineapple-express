
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
      hover:bg-red-400
    "
    v-on:click="signInWithGoogle"
  >
    Google
  </button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["signInWithGoogle"]),
  },
};
</script>