<template>
    <section :id="id" class="relative">
      <div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <slot name="bg">
          <div :class="twMerge('absolute inset-0', isDark ? 'bg-dark dark:bg-transparent' : '')"></div>
        </slot>
      </div>
      <div
        :class="twMerge(
          'relative text-default px-4 md:px-6 py-12 md:py-16 lg:py-20 mx-auto max-w-6xl',
          isDark ? 'dark' : ''
        )"
      >
        <Headline
          :title="title"
          :subtitle="subtitle"
          :highlight="highlight"
          :classes="{
            container: 'max-w-xl sm:mx-auto lg:max-w-2xl',
            title: 'sm:text-4xl text-3xl',
            ...(classes.headline ?? {}),
          }"
        />
        <div class="sm:mx-auto">
          <ItemGrid
            :items="items"
            :default-icon="IconArrowDownRight"
            :classes="{
              panel: 'max-w-none',
              ...(classes.items ?? {}),
            }"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { twMerge } from 'tailwind-merge'
  import  Headline  from '../ui/Headline.vue'
  import ItemGrid  from '../ui/ItemGrid.vue'
  import IconArrowDownRight from '../icons/IconArrowDownRight.vue'
  
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
  
  const {
    id,
    title = '',
    subtitle = '',
    highlight = '',
    items = [],
    isDark = false,
    classes = {},
  } = props
  </script>
  