<script lang="ts" setup>
import Lorem from './components/Lorem.vue'
</script>

<template>
  <div class="container px-4 mx-auto max-w-4xl my-10">
    <section class="flex gap-2 lt-md:justify-center items-center lt-md:flex-col">
      <img class="w-8 lt-md:w-12" src="https://raw.githubusercontent.com/unocss/unocss/main/playground/public/icon-gray.svg">
      <h1
        class="text-5xl font-bold lt-md:text-2xl lt-sm:text-xl"
      >
        unocss-preset-scrollbar-hide
      </h1>
    </section>
    <p class="text-black text-opacity-80 mt-6 lt-md:text-center">
      Hide scrollbars, although the element can still be scrolled if the element's content overflows.
    </p>
    <section
      class="p-5 mt-10 bg-white shadow-2xl rounded-xl"
    >
      <h3 class="font-bold">
        Default
      </h3>

      <Lorem />
    </section>

    <section
      class="p-5 mt-10 bg-white shadow-2xl rounded-xl"
    >
      <h3 class="font-bold">
        .scrollbar-hide
      </h3>

      <div class="p-4 mt-5 rounded-lg bg-gray-50">
        <Lorem class="scrollbar-hide" />
      </div>
    </section>

    <section
      class="p-5 mt-10 bg-white shadow-2xl rounded-xl"
    >
      <h3 class="font-bold">
        .scrollbar-hide
      </h3>

      <div class="p-4 mt-5 rounded-lg bg-gray-50">
        <Lorem class="md:scrollbar-default" />
      </div>
    </section>
  </div>
</template>

<style>
body {
  @apply bg-white;
}
</style>
