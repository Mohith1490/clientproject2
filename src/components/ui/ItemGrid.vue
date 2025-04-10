<template>
  <div v-if="items.length" :class="twMerge('grid mx-auto gap-8', containerClass)">
    <div v-for="(item, index) in items" :key="`${item.title}${index}`">
      <div :class="twMerge('flex flex-row max-w-md', panelClass, item.classes?.panel)">
        <div class="flex justify-center">
          <component v-if="item.icon || defaultIcon" :is="item.icon || defaultIcon"
            :class="twMerge('w-7 h-7 mr-2',defaultIconClass,item.icon)"
            />
        </div>
        <div>
          <h3 :class="twMerge('text-xl font-bold', titleClass, item.classes?.title)">
            {{ item.title }}
          </h3>
          <p v-if="item.description"
            :class="twMerge('text-gray-600 dark:text-slate-400 mt-3', descriptionClass, item.classes?.description)"
            v-html="item.description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { twMerge } from 'tailwind-merge'
import IconBrandTailwind from '../icons/IconBrandTailwind.vue'
import IconApps from '../icons/IconApps.vue'
import IconRocket from '../icons/IconRocket.vue'
import IconBrandGoogle from '../icons/IconBrandGoogle.vue'
import IconBulb from '../icons/IconBulb.vue'
import IconStar from '../icons/IconStar.vue'
import IconArrowDownRight from '../icons/IconArrowDownRight.vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  defaultIcon: {
    type: [Object, Function],
    default: null
  },
  classes: {
    type: Object,
    default: () => ({})
  }
})


// const svgFiles = {
//   IconBrandTailwind,
//   IconApps,
//   IconBrandGoogle,
//   IconRocket,
//   IconBulb,
//   IconStar
// }

const containerClass = props.classes.container || 'md:grid-cols-2'
const panelClass = props.classes.panel || ''
const titleClass = props.classes.title || ''
const descriptionClass = props.classes.description || ''
const defaultIconClass = props.classes.icon || 'text-sky-500 dark:text-sky-700'
</script>