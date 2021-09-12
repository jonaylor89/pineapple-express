<template>
  <section id="hero" class="relative z-0">
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
        <!-- <div class="text-white text-center md:text-left">Demo Video</div> -->
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
      <div class="absolute bottom-0 left-0 w-full z--1">
        <img
          class="absolute bottom-0 left-0 w-full overflow-hidden"
          src="assets/borderWaves.svg"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>