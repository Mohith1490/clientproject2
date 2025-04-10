<template>
    <div
      v-if="title || subtitle || highlight"
      :class="twMerge('mb-8 md:mx-auto md:mb-12 text-center', containerClass)"
    >
      <p
        v-if="highlight"
        class="text-base text-purple-600 dark:text-purple-200 font-bold tracking-wide uppercase"
        v-html="highlight"
      />
      <h2
        v-if="title"
        :class="twMerge('font-bold leading-tighter tracking-tighter font-heading text-heading', titleClass)"
        v-html="title"
      />
      <p
        v-if="subtitle"
        :class="twMerge('mt-4 text-muted', subtitleClass)"
        v-html="subtitle"
      />
    </div>
  </template>
  
  <script setup>
  import { twMerge } from 'tailwind-merge'
  
  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    highlight: {
      type: String,
      default: ''
    },
    classes: {
      type: Object,
      default: () => ({})
    }
  })
  
  const containerClass = props.classes.container || 'max-w-3xl'
  const titleClass = props.classes.title || 'text-4xl md:text-5xl'
  const subtitleClass = props.classes.subtitle || 'text-xl'
  </script>
  