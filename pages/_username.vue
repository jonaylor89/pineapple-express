<template>
  <h1>{{ this.username || "" }}</h1>
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
    ...mapState(["profile/visitedUser"]),
  },
  methods: {
    ...mapActions(["profile/fetchVisitedUserByUsername"]),
  },
};
</script>
