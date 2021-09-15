/*
state
getters
mutations
actions
*/

export const state = () => ({
  followingLoops: [],
  forYouLoops: [],
});

export const getters = {};

export const mutations = {
  SET_FOLLOWING_LOOPS(state, loops) {
    state.followingLoops = loops;
  },
};

export const actions = {
  async fetchUserFollowingFeed(ctx) {
    const userFeedQuery = await this.$fire.firestore
      .collection("feeds")
      .doc(this.state.user.id)
      .collection("userFeed")
      .get();
   
    console.log(userFeedQuery.docs)
    const followingLoops = await Promise.all(userFeedQuery.docs.map(async (doc) => {
      const loopDataSnapshot = await this.$fire.firestore.collection("loops").doc(doc.id).get();
      const loopData = loopDataSnapshot.data();
      return {
        audio: loopData.audio || '',
            comments: loopData.comments || 0,
            downloads: loopData.downloads || 0,
            likes: loopData.likes || 0,
            tags: loopData.tags || [],
            timestamp: loopData.timestamp?.toDate() || Date.now(),
            title: loopData.title || '',
      }
    }));
    ctx.commit('SET_FOLLOWING_LOOPS', followingLoops);
  },
};
