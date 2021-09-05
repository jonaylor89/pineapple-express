<template>
  <div class="flex flex-col md:flex-row">
    <div class="mt-10 mx-10 mb-2 md:mx-15 md:sticky md:top-0">
      <div
        class="
          mb-3
          w-full
          flex flex-row flex-shrink
          md:flex-col
          justify-between
          items-center
        "
      >
        <img
          class="
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
          :src="profilePicture"
        />
        <div class="w-full ml-4 flex flex-row justify-between items-center">
          <div class="flex flex-col items-center">
            <div class="text-lg font-bold">
              {{ this.visitedUser.loopsCount || 0 }}
            </div>
            <div>Loops</div>
          </div>
          <div class="flex flex-col items-center">
            <div class="text-lg font-bold">0</div>
            <div>Followers</div>
          </div>
          <div class="flex flex-col items-center">
            <div class="text-lg font-bold">0</div>
            <div>Following</div>
          </div>
        </div>
      </div>
      <div>
        <div class="font-bold md:text-4xl">
          {{ this.visitedUser.username || "anonymous" }}
        </div>
        <div>{{ this.visitedUser.bio || "" }}</div>
        <div class="w-full flex justify-center">
          <button
            v-if="currentUserId != visitedUser.id"
            type="button"
            class="
              w-full
              bg-purple-200
              text-purple-700 text-base
              font-semibold
              px-6
              py-2
              rounded-lg
            "
          >
            follow
          </button>
        </div>
      </div>
    </div>
    <div class="h-screen flex-grow"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  layout: "authenticated",
  async asyncData({ params, store }) {
    const username = params.username; // When calling /abc the slug will be "abc"
    store.dispatch("profile/fetchVisitedUserByUsername", username);
    return { username };
  },
  computed: {
    ...mapState({
      currentUserId: (state) => state.user.id,
      visitedUser: (state) => state.profile.visitedUser || {},
      id: (state) => state.profile.visitedUser?.id || "",
      profilePicture: (state) =>
        state.profile.visitedUser?.profilePicture || "",
    }),
  },
  methods: {
    ...mapActions(["profile/fetchVisitedUserByUsername"]),
  },
};
</script>
