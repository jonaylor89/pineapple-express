
<template>
  <div class="flex flex-col md:flex-row">
    <div class="mt-10 mx-10 mb-2 md:mx-15 md:sticky md:top-0">
      <div
        class="
          mb-3
          w-full
          flex flex-row flex-shrink
          md:flex-col
          justify-center
          items-center
        "
      >
        <img
          class="
            z-0
            flex-shrink-0
            rounded-full
            md:rounded-lg
            w-16
            h-16
            object-cover
            md:mb-5
            md:h-64
            md:w-64
          "
          :src="currentUser.profilePicture || ''"
        />
        <!-- <div
          class="
            z-10
            flex-shrink-0
            rounded-full
            md:rounded-lg
            w-16
            h-16
            md:mb-5
            md:h-64
            md:w-64
          "
        >
          Let's see
        </div> -->
        <div class="mx-3 md:mx-0">
          <div class="font-bold text-xl md:text-4xl">
            {{ this.currentUser.username || "anonymous" }}
          </div>
          <div>{{ this.currentUser.bio || "" }}</div>
          <div>{{ this.currentUser.location || "" }}</div>
        </div>
      </div>
    </div>
    <div class="h-screen flex-grow flex flex-col mx-3 lg:mx-40">
      <div class="py-3 font-bold text-xl">User Settings</div>
      <label class="form-input-label">Artist Name</label>
      <input
        type="text"
        class="
          form-input
          my-3
          mt-1
          block
          w-full
          rounded-md
          bg-gray-100
          border-transparent
          focus:border-gray-500
          focus:bg-white
          focus:ring-0
        "
        placeholder="Artist Name"
      />
      <input
        type="text"
        class="
          form-input
          my-3
          mt-1
          block
          w-full
          rounded-md
          bg-gray-100
          border-transparent
          focus:border-gray-500
          focus:bg-white
          focus:ring-0
        "
        placeholder="Bio"
      />
      <input
        type="text"
        class="
          form-input
          my-3
          mt-1
          block
          w-full
          rounded-md
          bg-gray-100
          border-transparent
          focus:border-gray-500
          focus:bg-white
          focus:ring-0
        "
        placeholder="Location"
      />
      <div class="flex justify-end md:justify-start">
        <button
          class="
            bg-purple-200
            hover:bg-purple-300
            text-purple-700 text-base
            font-semibold
            px-6
            py-2
            rounded-lg
          "
        >
          Save
        </button>
      </div>
      <div class="my-3"></div>
      <div class="py-3 font-bold text-xl">More Options</div>
      <hr />
      <div class="my-2 hover:font-bold">
        <a href="">Join out Discord Community</a>
      </div>
      <hr />
      <div class="my-2 hover:font-bold">
        <a href="">In The Loop Podcast</a>
      </div>
      <hr />
      <div class="my-2 hover:font-bold">
        <a href="">Follow Us on Instagram</a>
      </div>
      <hr />
      <div class="my-2 hover:font-bold">
        <a href="">Privacy Policy</a>
      </div>
      <hr />
      <div class="my-2 hover:font-bold">
        <a href="">Terms of Service</a>
      </div>
      <hr />
      <div class="my-2 hover:font-bold cursor-pointer">Sign Out</div>
      <hr />
      <div class="my-2">Download the App</div>
      <hr />
      <div class="text-red-400 my-2 cursor-pointer hover:font-bold">
        Delete Account
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  layout: "authenticated",
  fetch() {
    this.$store.commit("settings/SET_USER", this.$store.state.user);
  },
  computed: {
    ...mapState({
      currentUser: (state) => state.settings.tempUser,
    }),
  },
};
</script>
