<template>
  <div class="mt-6">
    <div class="w-full">
      <img src="assets/borderWavesBlack.svg" />
    </div>
    <div class="bg-black py-5">
      <div class="mx-5 divide-y-reverse divide-gray-900">
        <div class="flex flex-row justify-center">
          <div v-for="(icon, i) in icons" :key="i" class="px-3 md:px-6">
            <a :href="icon.link">
              <fa-icon
                :icon="['fab', icon.text]"
                class="text-white w-full h-full text-2xl"
              />
            </a>
          </div>
        </div>
        <div class="text-gray-400 text-center py-4 text-sm font-thin">
          Made with 💜 in Richmond, Virginia
        </div>
        <hr />
        <div class="text-gray-400 text-center py-4 text-sm font-light">
          {{ new Date().getFullYear() }} —
          <span class="text-bold">In The Loop LLC</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          text: "twitch",
          link: "https://www.twitch.tv/itl_studios",
        },
        {
          text: "twitter",
          link: "https://twitter.com/itl_studios",
        },
        {
          text: "instagram",
          link: "https://www.instagram.com/itl_studios/",
        },
        {
          text: "discord",
          link: "https://discord.gg/ZwpPGx98Qc",
        },
        {
          text: "spotify",
          link: "https://open.spotify.com/show/6LQi6uQ5nEgIK9vo0am9PS",
        },
      ],
    };
  },
};
</script>