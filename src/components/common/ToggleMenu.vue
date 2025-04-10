<template>
    <button
      type="button"
      :class="[
        'ml-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center transition',
        isExpanded ? 'expanded' : ''
      ]"
      aria-label="Toggle Menu"
      @click="toggleMenu"
    >
      <IconMenu :class="iconClass" />
    </button>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import IconMenu from '../icons/IconMenu.vue' 
  
  // Props
  defineProps({
    iconClass: {
      type: String,
      default: ''
    }
  })
  
  const isExpanded = ref(false)
  
  function toggleMenu() {
    isExpanded.value = !isExpanded.value
    document.body.classList.toggle('overflow-hidden')
    document.getElementById('header')?.classList.toggle('h-screen')
    document.querySelector('#header nav')?.classList.toggle('hidden')
  }
  </script>
  