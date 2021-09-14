<template>
    <div class="justify-between hover:bg-gray-200 h-14 p-2.5 flex items-center rounded-md">
        <div>{{ type.charAt(0).toUpperCase() + type.slice(1)}} from
          <NuxtLink :to="profilePath" class="text-indigo-700 hover:bg-gray-300 rounded-lg">{{ fromUserName }}</NuxtLink>
        </div>
        <div class="mr-5 text-gray-500">{{showTime}}</div> 
    </div>
</template>

<script>
import moment from 'moment';

export default {
    props: ['type', 'fromUserName', 'timestamp'],
    computed: {
        profilePath() {
      return "/" + this.fromUserName;
        },
        showTime() {
          const utcSeconds = this.timestamp.seconds;
          var date = new Date(utcSeconds * 1000);
          return moment(date).fromNow();
        },
    }
}
</script>
