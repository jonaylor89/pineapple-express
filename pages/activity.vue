<template>
  <div>
    <h1 class="text-5xl mt-5 ml-10">Activity</h1>
    <div class="grid-cols-1 p-5 m-5 space-y-4">

      <ul class="space-y-4">
        <li v-for="(activity, index) in activities" :key="activity">
          <ActivityWidget 
          :type="activities[index].type" 
          :fromUserName="activities[index].fromUserName" 
          />
        </li>
      </ul>

    </div>
  </div>

  <!-- <div class="flex flex-row border-2 border-red-300 p-5 m-5 space-x-4">

    <div class="bg-yellow-500 w-20 h-20 text-5xl flex items-center justify-center rounded-md text-white">1</div>
    <div class="bg-yellow-500 w-20 h-20 text-5xl flex items-center justify-center rounded-md text-white">2</div>
    <div class="bg-yellow-500 w-20 h-20 text-5xl flex items-center justify-center rounded-md text-white">3</div>

  </div> -->

</template>

<script>
export default {
   layout: 'authenticated',
    data() {
      return {
        activities: [
          {
            fromUserName: "thomas",
            type: "like",
            toUserName: "roland",
          }, 
          {
            fromUserName: "chris",
            type: "comment",
            toUserName: "sohail",
          }, 
          {
            fromUserName: "johannes",
            type: "follow",
            toUserName: "thomas",
          }
          ]
      }
    }, 
};

</script>