<template>
  <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
    <div class="row-gap-10 grid gap-6 md:grid-cols-2">
      <!-- Steps Column -->
      <div class="mb-4 md:mb-0 md:py-4 md:pr-16">
        <h2 v-if="stepsData.title" class="font-heading mb-8 text-3xl font-bold lg:text-4xl">
          {{ stepsData.title }}
        </h2>

        <div
          v-for="(item, index) in stepsData.items"
          :key="`item-steps-${index}`"
          class="flex"
        >
          <div class="mr-4 flex flex-col items-center">
            <div>
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full border-2"
                :class="index === stepsData.items.length - 1
                  ? 'border-purple-900 bg-purple-900'
                  : 'border-purple-900'"
              >
                <component
                  :is="item.icon"
                  class="h-6 w-6"
                  :class="index === stepsData.items.length - 1
                    ? 'text-white dark:text-slate-200'
                    : 'text-purple-800 dark:text-slate-200'"
                />
              </div>
            </div>
            <div v-if="index !== stepsData.items.length - 1" class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
          </div>
          <div class="pt-1" :class="{ 'pb-8': index !== stepsData.items.length - 1 }">
            <p v-if="item.title" class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
              {{ item.title }}
            </p>
            <p v-if="item.description" class="text-gray-600 dark:text-slate-400">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Image Column -->
      <div class="relative">
        <img
          v-if="stepsData.image"
          :src="stepsData.image.src"
          :alt="stepsData.image.alt"
          class="inset-0 w-full rounded-md bg-gray-500 object-cover object-top shadow-lg dark:bg-slate-700 md:absolute md:h-full"
          width="532"
          height="704"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import IconStar from '@/components/icons/IconStar.vue'

const sideImg =
  'https://images.unsplash.com/photo-1583195648430-18b2681307e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80'

const stepsData = {
  title: 'Sed ac magna sit amet risus tristique interdum. hac.',
  items: [
    {
      title: 'Step 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.',
      icon: IconStar,
    },
    {
      title: 'Step 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconStar,
    },
    {
      title: 'Step 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconStar,
    },
    {
      title: 'Ready!',
      icon: IconStar,
    },
  ],
  image: {
    src: sideImg,
    alt: 'Steps image',
  },
}
</script>
