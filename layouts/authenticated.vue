<template>
  <div>
    <AuthNavbar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  layout: "authenticated",
  middleware: "authenticated",
};
</script>