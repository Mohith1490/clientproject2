<template>
    <section :id="id" class="relative scroll-mt-16">
      <div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <slot name="bg">
          <div :class="twMerge('absolute inset-0', isDark ? 'bg-dark dark:bg-transparent' : '')"></div>
        </slot>
      </div>
      <div
        :class="twMerge(
          'relative mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default',
          classes?.container,
          isDark ? 'dark' : ''
        )"
      >
        <Headline :title="title" :subtitle="subtitle" :highlight="highlight" :classes="classes?.headline" />
        <ItemGrid
          :items="items"
          :default-icon="IconStar"
          :classes="{
            container: 'md:grid-cols-2',
            title: 'md:text-[1.3rem]',
            icon: 'text-white bg-sky-500 dark:bg-sky-700 rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4',
            ...(classes?.items ?? {}),
          }"
        />
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { twMerge } from 'tailwind-merge'
  import  Headline  from '../ui/Headline.vue'
  import  ItemGrid  from '../ui/ItemGrid.vue'
  import IconStar from '../icons/IconStar.vue'
  
  interface Item {
    title?: string
    description?: string
    icon?: any
    classes?: Record<string, string>
  }
  
  interface Props {
    id?: string
    title?: string | undefined
    subtitle?: string | undefined
    highlight?: string | undefined
    items: Item[]
    isDark?: boolean
    classes?: Record<string, any>
  }
  
  const props = defineProps<Props>()
  
  const { id, title = "", subtitle = "", highlight = "", items = [], classes = {}, isDark = false } = props
  </script>
  