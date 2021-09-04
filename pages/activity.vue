<template>
  <div>
    <h1 class="text-5xl mt-5 ml-10">Activity</h1>
    <div class="grid-cols-1 p-5 m-5 space-y-4">

      <div class="justify-between hover:bg-gray-200 h-14 p-2.5 flex items-center border-2 rounded-md">
        <div>{{ activities[0].type.charAt(0).toUpperCase() + activities[0].type.slice(1)}} from
          <span class="text-indigo-700 hover:bg-gray-300 rounded-lg">@{{ activities[0].fromUserName }}</span>
        </div>
        <div class="mr-5 text-gray-500">10 mins ago</div>
      </div>

      <div class="justify-between hover:bg-gray-200 h-14 p-2.5 flex items-center border-2 rounded-md">
        <div>{{ activities[1].type.charAt(0).toUpperCase() + activities[1].type.slice(1) }} from
          <span class="text-indigo-700 hover:bg-gray-300 rounded-lg">@{{ activities[1].fromUserName }}</span>
        </div>
        <div class="mr-5 text-gray-500">12 mins ago</div>
      </div>

      <div class="justify-between hover:bg-gray-200 h-14 p-2.5 flex items-center border-2 rounded-md">
        <div>{{ activities[2].type.charAt(0).toUpperCase() + activities[2].type.slice(1) }} from
          <span class="text-indigo-700 hover:bg-gray-300 rounded-lg">@{{ activities[2].fromUserName }}</span>
        </div>
        <div class="mr-5 text-gray-500">35 mins ago</div>
      </div>

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
<style scoped>
</style>