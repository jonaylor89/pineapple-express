<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="container h-screen flex justify-center items-center">
        <div class="p-8 bg-white rounded-lg max-w-6xl pb-10">
          <div class="flex justify-center mb-4">
            <img src="assets/logo_black.png" width="140" />
          </div>

          <div class="font-bold text-xl">Sign in to your account</div>

          <div class="flex justify-between items-center mt-3">
            <hr class="w-full" />
          </div>

          <google-sign-in-btn />
          <!-- <apple-sign-in-btn /> -->
        </div>
      </div>
      <div
        class="
          container
          h-screen
          flex
          justify-center
          items-center
          bg-gradient-to-t
          from-gray-800
          to-purple-500
          hidden
          md:inline-flex
        "
      >
        <div>
          <img src="assets/happy_bunch_desk.svg" alt="hero illustration" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    // If the user is authenticated
    if (store.getters.isLoggedIn) {
      return redirect("/");
    }
  },
};
</script>
