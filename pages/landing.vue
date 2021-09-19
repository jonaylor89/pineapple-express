
<template>
  <div>
    <landing-header :color="color" :shadow="shadow" />
    <landing-hero />
    <landing-about />
    <landing-affiliate />
    <landing-community />
    <!-- <landing-pricing /> -->
    <landing-footer />
  </div>
</template>

<script>
export default {
  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "bg-transparent";
      this.shadow = "shadow-lg";
    }
  },
  beforeMount() {
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    if (typeof window === "undefined") return;
    window.removeEventListener("scroll", this.onScroll);
  },
  data() {
    return {
      fab: null,
      color: "bg-transparent",
      shadow: "",
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
  },
  watch: {
    fab(value) {
      if (value) {
        this.color = "bg-black";
        this.shadow = "shadow-lg";
      } else {
        this.color = "bg-transparent";
        this.shadow = "";
      }
    },
  },
};
</script>