<template>
    <footer class="border-t border-gray-200 dark:border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12">
          <div class="col-span-12 lg:col-span-4 pr-8">
            <div class="mb-2">
              <router-link class="inline-block font-bold text-xl" to="/">
                Qwind
              </router-link>
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi
              risus tempus nulla
            </div>
          </div>
          <div
            v-for="(linkGroup, index) in links"
            :key="index"
            class="col-span-6 md:col-span-3 lg:col-span-2"
          >
            <div class="text-gray-800 dark:text-gray-300 font-medium mb-2">{{ linkGroup.title }}</div>
            <ul v-if="Array.isArray(linkGroup.items) && linkGroup.items.length > 0" class="text-sm">
              <li v-for="(item, index2) in linkGroup.items" :key="index2" class="mb-2">
                <router-link
                  class="text-gray-600 hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"
                  :to="item.href"
                >
                  {{ item.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:flex md:items-center md:justify-between py-6 md:py-8">
          <ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
            <li v-for="(socialItem, index) in social" :key="index">
              <a
                :href="socialItem.href"
                class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                :aria-label="socialItem.label"
                :title="socialItem.label"
              >
                <component :is="socialItem.icon" />
              </a>
            </li>
          </ul>
  
          <div class="text-sm text-gray-700 mr-4 dark:text-slate-400">
            <span
              class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"
            ></span>
            Made by{" "}
            <a class="text-secondary-800 underline dark:text-gray-200" href="https://onwidget.com/">
              onWidget
            </a>
            · All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  import { RouterLink } from 'vue-router'
  import IconTwitter from '../icons/IconTwitter.vue'
  import IconInstagram from '../icons/IconInstagram.vue'
  import IconFacebook from '../icons/IconFacebook.vue'
  import IconGithub from '../icons/IconGithub.vue'
  
  interface LinkItem {
    title: string
    href: string
  }
  
  interface LinkGroup {
    title: string
    items: LinkItem[]
  }
  
  interface SocialItem {
    label: string
    icon: any
    href: string
  }
  
  const links: LinkGroup[] = [
    {
      title: 'Product',
      items: [
        { title: 'Features', href: '#' },
        { title: 'Security', href: '#' },
        { title: 'Team', href: '#' },
        { title: 'Enterprise', href: '#' },
        { title: 'Customer stories', href: '#' },
        { title: 'Pricing', href: '#' },
        { title: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      items: [
        { title: 'Developer API', href: '#' },
        { title: 'Partners', href: '#' },
        { title: 'Atom', href: '#' },
        { title: 'Electron', href: '#' },
        { title: 'Qwind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      items: [
        { title: 'Docs', href: '#' },
        { title: 'Community Forum', href: '#' },
        { title: 'Professional Services', href: '#' },
        { title: 'Skills', href: '#' },
        { title: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      items: [
        { title: 'About', href: '#' },
        { title: 'Blog', href: '#' },
        { title: 'Careers', href: '#' },
        { title: 'Press', href: '#' },
        { title: 'Inclusion', href: '#' },
        { title: 'Social Impact', href: '#' },
        { title: 'Shop', href: '#' },
      ],
    },
  ]
  
  const social: SocialItem[] = [
    { label: 'Twitter', icon: IconTwitter, href: '#' },
    { label: 'Instagram', icon: IconInstagram, href: '#' },
    { label: 'Facebook', icon: IconFacebook, href: '#' },
    { label: 'Github', icon: IconGithub, href: 'https://github.com/onwidget/qwind' },
  ]
  </script>
  