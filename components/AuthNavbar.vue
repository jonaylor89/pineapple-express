<template>
  <div class="">
    <nav
      class="
        fixed
        w-full
        z-50
        flex
        items-center
        justify-between
        flex-wrap
        bg-itl-nav-bar
        p-2
        px-12
      "
    >
      <NuxtLink to="/">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img src="assets/logo_white.png" height="30" width="30" />
          <span class="font-semibold text-xl pl-3 tracking-tight">
            In The Loop</span
          >
        </div>
      </NuxtLink>
      <div class="block lg:hidden">
        <button
          class="
            flex
            items-center
            px-3
            py-2
            border
            rounded
            text-teal-200
            border-teal-400
            hover:text-white
            hover:border-white
          "
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        class="
          w-full
          block
          flex-grow
          lg:flex lg:flex-row-reverse
          lg:items-center
          lg:w-auto
        "
      >
        <div>
          <NuxtLink
            to="/"
            class="
              lg:inline-block
              text-sm
              px-4
              py-2
              leading-none
              rounded
              text-white
              border-white
              hover:border-transparent
              hover:text-purple-500
              mt-4
              lg:mt-0
            "
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/activity"
            class="
              lg:inline-block
              text-sm
              px-4
              py-2
              leading-none
              rounded
              text-white
              border-white
              hover:border-transparent
              hover:text-purple-500
              mt-4
              lg:mt-0
            "
          >
            Activity
          </NuxtLink>
          <NuxtLink
            :to="profilePath"
            class="
              lg:inline-block
              inlne-block
              text-sm
              px-4
              py-2
              leading-none
              rounded
              text-white
              border-white
              hover:border-transparent
              hover:text-purple-500
              mt-4
              lg:mt-0
            "
          >
            <img
              class="inline object-cover w-10 h-10 rounded-full"
              :src="profilePicture"
            />
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      username: (state) => state.user.username || "Anonymous",
      profilePicture: (state) => state.user.profilePicture || "",
    }),
    profilePath: () => ("/" + this.username),
  },
};
</script>