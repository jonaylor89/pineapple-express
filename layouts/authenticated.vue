<template>
  <div>
    <div>Navigation Bar Here</div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  layout: "authenticated",
  middleware: "authenticated",
};
</script>