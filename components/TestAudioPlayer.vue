<template>
  <div class="w-full">
    <div class="h-2 bg-red-light"></div>
    <div class="flex items-center justify-center h-screen bg-red-lightest">
      <div
        class="bg-white shadow-lg rounded-lg"
        style="width: 45rem !important"
      >
        <div class="flex">
          <div>
            <img
              class="w-full rounded hidden md:block"
              src="https://tailwindcss.com/img/card-top.jpg"
              alt="Album Pic"
            />
          </div>
          <div class="w-full p-8">
            <div class="flex justify-between">
              <div>
                <h3 class="text-2xl text-grey-darkest font-medium">
                  A Sky Full of Stars
                </h3>
                <p class="text-sm text-grey mt-1">Ghost Stories</p>
              </div>
              <!-- <div class="text-red-lighter">
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"
                  />
                </svg>
              </div> -->
            </div>
            <div class="flex justify-center items-center mt-8">
              
              <div class="text-white p-8 rounded-full bg-red-light shadow-lg">
                <svg
                  class="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                </svg>
              </div>
              
            </div>
          </div>
        </div>

        <div class="mx-8 py-4">
          <div class="flex justify-between text-sm text-grey-darker">
            <p>0:40</p>
            <p>4:20</p>
          </div>
          <div class="mt-1">
            <div class="h-1 bg-grey-dark rounded-full">
              <div class="w-1/5 h-1 bg-red-light rounded-full relative">
                <span
                  class="
                    w-4
                    h-4
                    bg-red
                    absolute
                    pin-r pin-b
                    -mb-1
                    rounded-full
                    shadow
                  "
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
