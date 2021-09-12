<template>
  <section id="about">
    <div class="mb-10 mx-4 md:mx-32">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div
          class="
            tranform
            translate-y-0
            hover:translate-y-6
            shadow-lg
            hover:shadow-2xl
            rounded-tr-xl rounded-bl-xl rounded-tl-md rounded-br-md
            flex flex-col
            justify-center
            items-center
            p-8
            h-full
            w-full
          "
        >
          <img src="assets/icon1.png" class="h-20" />
          <div class="font-bold text-xl p-3">Meet New Artists</div>
          <div class="text-center">
            Whether you're looking for a vocalist, guitarist, or an EDM
            producer, you can find exactly what you need on In The Loop
          </div>
        </div>
        <div
          class="
            tranform
            translate-y-0
            hover:translate-y-6
            shadow-lg
            hover:shadow-2xl
            rounded-tr-xl rounded-bl-xl rounded-tl-md rounded-br-md
            flex flex-col
            justify-center
            items-center
            p-8
            h-full
            w-full
          "
        >
          <img src="assets/icon2.png" class="h-20" />
          <div class="font-bold text-xl p-3">Meet New Artists</div>
          <div class="text-center">
            Whether you're looking for a vocalist, guitarist, or an EDM
            producer, you can find exactly what you need on In The Loop
          </div>
        </div>
        <div
          class="
            tranform
            translate-y-0
            hover:translate-y-6
            shadow-lg
            hover:shadow-2xl
            rounded-tr-xl rounded-bl-xl rounded-tl-md rounded-br-md
            flex flex-col
            justify-center
            items-center
            p-8
            h-full
            w-ful
          "
        >
          <img src="assets/icon3.png" class="h-20" />
          <div class="font-bold text-xl p-3">Meet New Artists</div>
          <div class="text-center">
            Whether you're looking for a vocalist, guitarist, or an EDM
            producer, you can find exactly what you need on In The Loop
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div
          class="flex flex-col justify-center items-center md:items-start"
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
              my-4
            "
          >
            <span
              class="
                bg-clip-text
                text-transparent
                bg-gradient-to-r
                from-blue-600
                to-itl-accent
              "
            >
              Our Philosophy
            </span>
          </div>
          <div
            class="
              font-bold
              text-center
              md:text-left
              text-2xl
              md:text-3xl
              md:pb-4
            "
          >
            Dedication to the Creators!
          </div>
          <div class="flex flex-col justify-between items-left">
            <div
              v-for="(item, i) in ourPhilosophy"
              :key="i"
              class="
                flex flex-col
                md:flex-row
                justify-between
                items-center
                my-5
              "
            >
              <img :src="item.img" height="75" width="75" />
              <div class="text-center md:text-left">
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
        <div class="md:flex justify-end items-end hidden">
          <img src="assets/ill1.svg" class="" height="400" width="400" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ourPhilosophy: [
        {
          img: "assets/icon2.svg",
          text: "Transform your upfinished loops into lego bricks that yourself and others can use to build from.",
        },
        {
          img: "assets/icon1.svg",
          text: "Build your digital portfolio and add licenses to your loops to showcase and protect your work.",
        },
        {
          img: "assets/icon3.svg",
          text: "Monitor your growth and analyze your loops with advanced analytic and activity feeds.",
        },
      ],
    };
  },
};
</script>