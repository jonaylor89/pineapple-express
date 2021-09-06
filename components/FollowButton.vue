<template>
  <button
    v-if="this.currentUserId !== this.visitedUserId && !isFollowing"
    type="button"
    class="
      w-full
      bg-purple-200
      hover:bg-purple-300
      text-purple-700 text-base
      font-semibold
      px-6
      py-2
      rounded-lg
    "
    v-on:click="_followUser"
  >
    follow
  </button>
  <button
    v-else-if="this.currentUserId !== this.visitedUserId && isFollowing"
    type="button"
    class="
      w-full
      bg-purple-700
      hover:bg-purple-300
      text-white text-base
      font-semibold
      px-6
      py-2
      rounded-lg
    "
    v-on:click="_unfollowUser"
  >
    following
  </button>
  <button
    v-else
    type="button"
    class="
      w-full
      bg-purple-200
      hover:bg-purple-300
      text-purple-700 text-base
      font-semibold
      px-6
      py-2
      rounded-lg
    "
    v-on:click="_toSettings"
  >
    edit
  </button>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      visitedUserId: (state) => state.profile.visitedUser?.id || "",
      currentUserId: (state) => state.user.id,
      isFollowing: (state) => state.profile.isFollowing,
      followerCount: (state) => state.profile.followerCount,
      followingCount: (state) => state.profile.followingCount,
    }),
  },
  methods: {
    ...mapActions("profile", [
      "fetchIsFollowing",
      "followUser",
      "unfollowUser",
    ]),
    _fetchIsFollowing() {
      this.fetchIsFollowing(this.visitedUserId);
    },
    _followUser() {
      this.followUser(this.visitedUserId);
    },
    _unfollowUser() {
      this.unfollowUser(this.visitedUserId);
    },
    _toSettings() {
      this.$router.push("/settings");
    },
  },
};
</script>
