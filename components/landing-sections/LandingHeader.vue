<template>
  <div
    class="fixed w-full z-50 transition duration-600 ease-in-out"
    :class="color"
  >
    <div class="flex flex-row justify-between px-10 py-4">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src="assets/logo_white.png" height="30" width="30" />
        <span class="font-semibold text-2xl pl-3 tracking-tight">
          In The Loop</span
        >
      </div>
      <div class="flex">
        <div
          class="
            text-white
            font-thin
            text-lg
            px-5
            py-2
            rounded
            bg-white bg-opacity-0
            hover:bg-opacity-25
            cursor-pointer
          "
          v-on:click="scrollTo('#hero')"
        >
          Home
        </div>
        <div
          class="
            text-white
            font-thin
            text-lg
            px-5
            py-2
            rounded
            bg-white bg-opacity-0
            hover:bg-opacity-25
            cursor-pointer
          "
          v-on:click="scrollTo('#about')"
        >
          About
        </div>
        <div
          class="
            text-white
            font-thin
            text-lg
            px-5
            py-2
            rounded
            bg-white bg-opacity-0
            hover:bg-opacity-25
            cursor-pointer
          "
          v-on:click="scrollTo('#community')"
        >
          Community
        </div>
        <div
          class="
            text-white
            font-thin
            text-lg
            px-5
            py-2
            rounded
            bg-itl-accent
            hover:bg-white
            hover:text-itl-accent
          "
        >
          <a href="https://nzqgw10avlu.typeform.com/to/scNWQNtg"> Sign Up </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
    shadow: String,
  },
  methods: {
    scrollTo(id) {
      const el = document.querySelector(id);
      window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    },
  },
};
</script>