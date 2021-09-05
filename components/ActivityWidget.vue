<template>
    <div class="justify-between hover:bg-gray-200 h-14 p-2.5 flex items-center rounded-md">
        <div>{{ type.charAt(0).toUpperCase() + type.slice(1)}} from
          <NuxtLink :to="profilePath" class="text-indigo-700 hover:bg-gray-300 rounded-lg">@{{ fromUserName }}</NuxtLink>
        </div>
        <!-- NOTE: Hard coded timestamp for display purposes -->
        <div class="mr-5 text-gray-500">10 mins ago</div> 
    </div>
</template>

<script>
export default {
    props: ['type', 'fromUserName'],
    computed: {
        profilePath() {
      return "/" + this.fromUserName;
        },
    }
}
</script>
