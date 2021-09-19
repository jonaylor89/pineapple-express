<template>
  <div>
    <div class="block">
      <h1 class="text-4xl mt-5 p-5 lg:p-0 lg:mx-96">Feed</h1>
    </div>
    <ul class="">
      <li v-for="(loop, index) in this.followingLoops" :key="index">
        <Waveform :loop="loop" :id="index" />
      </li>
    </ul>
    <!-- <TestAudioPlayer /> -->
  </div>
  
</template>

<script>
import {mapState, mapActions} from "vuex"

export default {
  layout: 'authenticated',
  async asyncData({ store }) {
    store.dispatch("timeline/fetchFollowingFeed");
    return { };
  },
  computed: {
    ...mapState({
      followingLoops: state => state.timeline.followingLoops
    })
  }
};
</script>