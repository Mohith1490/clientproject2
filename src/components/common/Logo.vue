<template>
  <span class="self-center ml-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white flex items-center">
    <img
      :src="logoSrc"
      class="inline-block mr-1"
      :width="32"
      :height="32"
      alt="Qwind Logo"
      loading="lazy"
    />
    Qwind
  </span>
</template>

<script setup>
import logoSrc from '../../assets/images/logo.png'
</script>
