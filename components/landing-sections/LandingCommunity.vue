<template>
  <div
    class="
      flex flex-col
      justify-start
      items-center
      md:items-start
      mx-3
      md:mx-32
    "
  >
    <div
      class="
        text-center
        md:text-start
        text-3xl
        md:text-5xl
        font-extrabold
        leading-none
        tracking-tight
        mb-4
      "
    >
      <span
        class="
          bg-clip-text
          text-transparent
          bg-gradient-to-r
          to-red-600
          from-itl-accent
        "
      >
        Join the Community
      </span>
    </div>
    <div class="text-center text-gray-500 md:text-start text-xl font-medium">
      The <span class="font-bold">In The Loop</span> community is full of
      up-and-coming artists & producers looking to collaborate on their next big
      thing
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div v-for="(features, i) in features" :key="i">
        <div
          class="
            shadow-xl
            rounded-2xl
            p-8
            my-4
            flex flex-col
            justify-around
            items-center
            w-full
            h-full
          "
          :class="features.img"
        >
          <div
            class="
              font-extrabold
              text-center text-3xl
              py-3
              md:text-4xl
              text-white
            "
          >
            {{ features.title }}
          </div>
          <div class="py-4 text-center text-white md:text-lg">
            {{ features.text }}
          </div>
          <a
            class="
              bg-white
              text-itl-accent
              hover:bg-gray-200
              font-bold
              rounded-full
              px-4
              py-2
            "
            :href="features.buttonLink"
          >
            {{ features.buttonTitle }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          img: "bg-landing-comm-1",
          title: "In The Loop Podcast",
          text: "Artist interviews from the up-and-coming all the way to the established OGs. We talk about their craft and discuss the issues affecting all of us in the artist community.",
          buttonTitle: "Listen Now",
          buttonLink: "https://open.spotify.com/show/6LQi6uQ5nEgIK9vo0am9PS",
        },
        {
          img: "bg-landing-comm-2",
          title: "Discord Community",
          text: "Expose your new samples to new artists and build a network or creators to work with",
          buttonTitle: "Join the Discord",
          buttonLink: "https://discord.gg/ZwpPGx98Qc",
        },
      ],
    };
  },
};
</script>