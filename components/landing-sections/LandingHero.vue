<template>
  <section id="hero" class="relative">
    <div
      class="
        grid grid-cols-1
        md:grid-cols-2
        bg-gradient-to-br
        from-black
        to-itl-accent
      "
    >
      <div
        class="
          px-4
          md:pl-32
          container
          h-screen
          flex flex-col
          justify-center
          items-center
          md:items-start
        "
      >
        <div
          class="
            text-white text-6xl
            font-extrabold
            text-center
            py-4
            md:text-left
          "
        >
          Made for <br />
          Music
        </div>
        <div class="text-white py-6 text-2xl text-center md:text-left">
          The platform tailored for artists and producers to collaborate and
          build great things
        </div>
        <button
          class="
            text-white text-center
            md:text-left
            text-xl
            font-bold
            px-5
            py-3
            my-4
            rounded-full
            bg-itl-accent
            hover:bg-white
            hover:text-itl-accent
          "
        >
          Join the Waitlist
        </button>
        <div class="video py-4" @click="openDialog">
          <div class="playBut flex flex-row items-center cursor-pointer">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
              x="0px"
              y="0px"
              width="60px"
              height="60px"
              viewBox="0 0 213.7 213.7"
              enable-background="new 0 0 213.7 213.7"
              xml:space="preserve"
            >
              <polygon
                class="triangle"
                id="XMLID_18_"
                fill="none"
                stroke-width="7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                points="73.5,62.5 148.5,105.8 73.5,149.1 "
              />

              <circle
                class="circle"
                id="XMLID_17_"
                fill="none"
                stroke-width="7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                cx="106.8"
                cy="106.8"
                r="103.3"
              />
            </svg>
            <p class="text-white text-center font-bold md:text-left px-3">
              Demo Video
            </p>
          </div>
        </div>
      </div>

      <div
        class="
          container
          h-screen
          flex
          justify-center
          items-center
          hidden
          md:inline-flex
        "
      >
        <div class="h-full flex items-center">
          <img
            class="h-3/6"
            src="assets/happy_bunch_desk.svg"
            alt="hero illustration"
          />
        </div>
      </div>
      <div class="absolute bottom-0 left-0 w-full z-30">
        <img
          class="absolute bottom-0 left-0 w-full overflow-hidden"
          src="assets/borderWaves.svg"
        />
      </div>
    </div>
    <div
      v-if="dialog"
      class="
        overflow-x-hidden overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        justify-center
        items-center
        flex
        text-white
      "
      @click="closeDialog"
    >
      <youtube :video-id="videoId" @ready="ready" @playing="playing"> </youtube>
    </div>
    <div
      v-if="dialog"
      class="
        fixed
        inset-0
        w-full
        h-full
        bg-black bg-opacity-75
        z-40
        cursor-pointer
      "
      @click="closeDialog"
    ></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      videoId: "7YWRxSDwAi8",
      player: null,
    };
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
    ready(event) {
      this.player = event.target;
    },
    playing(event) {
      // The player is playing a video.
      console.log(event);
    },
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },
};
</script>


<style>
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}
.playBut {
  /*  border: 1px solid red;*/
  -webkit-transition: all 0.5s ease;
}
.playBut .triangle {
  -webkit-transition: all 0.7s ease-in-out;
  stroke-dasharray: 240;
  stroke-dashoffset: 480;
  stroke: white;
  transform: translateY(0);
}
.playBut:hover .triangle {
  stroke-dashoffset: 0;
  opacity: 1;
  stroke: white;
  animation: nudge 0.7s ease-in-out;
  @keyframes nudge {
    0% {
      transform: translateX(0);
    }
    30% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    70% {
      transform: translateX(-2px);
    }
    100% {
      transform: translateX(0);
    }
  }
}
.playBut:hover .circle {
  stroke-dashoffset: 0;
  opacity: 1;
}
</style>