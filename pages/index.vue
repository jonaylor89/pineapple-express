<template>
  <div>
    <div class="block">
      <h1 class="text-4xl mt-5 p-5 lg:p-0 lg:mx-80">Feed</h1>
    </div>
    <h2 class="lg:mx-80 mt-5">Audio Feed here:</h2>
    
    <!-- <TestAudioPlayer /> -->
  </div>
  
</template>

<script>
export default {
  layout: 'authenticated',
  async asyncData({ store }) {
    store.dispatch("timeline/fetchUserFollowingFeed");
  },
};
</script>