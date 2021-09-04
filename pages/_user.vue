<template>
  <h1>{{ this.user }}</h1>
</template>

<script>
export default {
  layout: 'authenticated',
  async asyncData({ params }) {
    const user = params.user; // When calling /abc the slug will be "abc"
    return { user };
  },
};
</script>
