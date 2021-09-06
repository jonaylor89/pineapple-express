// :fromUserName="activities[index].fromUserName"
<template>
  <div>
    <h1 class="text-4xl mt-5 p-5 lg:p-0 lg:mx-80">Activity</h1>
    <div v-if="activities.length !== 0" class="grid-cols-1 p-5 lg:mx-72 space-y-4">
      <ul class="divide-y">
       <li v-for="(activity, index) in this.activities" :key="activity.id">
          <ActivityWidget
            :type="activities[index].type"
            :fromUserName="activities[index].fromUserId.username || ''"
          /> {{showState}}
        </li>
      </ul>
    </div>
    <h2
      v-else
      class="
        p-5
        items-center
        flex
        align-center
        h-14
        mx-72
        mt-10
        shadow-xl
        bg-purple-200
        rounded-lg
        text-purple-500
      "
    >
      Looks like nothing's going on! Check back later.
    </h2>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex"

export default {
  layout: "authenticated",
  async asyncData({store}) {
    store.dispatch("activity/fetchUserActivities");
    return { };
  },
  computed: {
    ...mapState({
      activities: state => state.activity.activities,
    }),
    showState() {
      console.log(this.activities);
    }
  },
  methods: {
    ...mapActions({

    })
  }
};
</script>