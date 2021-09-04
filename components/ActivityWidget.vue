<template>
    <div class="justify-between hover:bg-gray-200 h-14 p-2.5 flex items-center border-2 rounded-md">
        <div>{{ type.charAt(0).toUpperCase() + type.slice(1)}} from
          <span class="text-indigo-700 hover:bg-gray-300 rounded-lg">@{{ fromUserName }}</span>
        </div>
        <div class="mr-5 text-gray-500">10 mins ago</div>
    </div>
</template>

<script>
export default {
    name: "activity",
    props: ['type', 'fromUserName']
}
</script>
