<template>
    <button
      type="button"
      class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
      aria-label="Toggle between Dark and Light mode"
      @click="toggleTheme"
    >
      <component :is="theme === 'dark' ? IconMoon : IconSun" :class="iconClass" />
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import IconSun from '@/components/icons/IconSun.vue'
  import IconMoon from '@/components/icons/IconMoon.vue'
  
  // Props
  defineProps({
    iconClass: {
      type: String,
      default: ''
    }
  })
  
  // Reactive state
  const theme = ref(undefined)
  
  // Detect theme on mount
  onMounted(() => {
    theme.value = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  })
  
  // Toggle function
  function toggleTheme() {
    if (theme.value === 'dark') {
      document.documentElement.classList.remove('dark')
      theme.value = 'light'
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('dark')
      theme.value = 'dark'
      localStorage.theme = 'dark'
    }
  }
  </script>
  