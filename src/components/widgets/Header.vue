<template>
  <header
    id="header"
    :class="[
      'sticky top-0 z-40 flex-none mx-auto w-full border-b border-gray-50/0 transition-[opacity] ease-in-out',
      store.isScrolling
        ? 'md:bg-white/90 md:backdrop-blur-sm  dark:md:bg-slate-900/90 bg-white dark:bg-slate-900'
        : ''
    ]"
  >
    <div class="absolute inset-0"></div>
    <div class="relative text-default py-3 px-3 md:px-6 mx-auto w-full md:flex md:justify-between max-w-7xl">
      <div class="mr-auto rtl:mr-0 rtl:ml-auto flex justify-between">
        <RouterLink class="flex items-center" to="/">
          <Logo />
        </RouterLink>
        <div class="flex items-center md:hidden">
          <ToggleTheme iconClass="w-6 h-6 md:w-5 md:h-5 md:inline-block" />
          <ToggleMenu />
        </div>
      </div>
      <nav
        v-if="menu && menu.items"
        class="items-center w-full md:w-auto hidden md:flex text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:mx-5"
        aria-label="Main navigation"
      >
        <ul class="flex flex-col dark:text-slate-300 md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium">
          <li
            v-for="(menuItem, index) in menu.items"
            :key="index"
            :class="menuItem.items?.length ? 'dropdown' : ''"
          >
            <template v-if="menuItem.items?.length">
              <button class="hover:text-link dark:hover:text-white px-4 py-3 flex items-center">
                {{ menuItem.text }}
                <IconChevronDown class="w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" />
              </button>
              <ul class="dropdown-menu md:backdrop-blur-md dark:md:bg-slate-800 rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl">
                <li v-for="(subItem, index2) in menuItem.items" :key="index2">
                  <RouterLink
                    class="first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap"
                    :to="subItem.href"
                  >
                    {{ subItem.text }}
                  </RouterLinK>
                </li>
              </ul>
            </template>
            <template v-else>
              <RouterLink
                class="hover:text-link dark:hover:text-white px-4 py-3 flex items-centers"
                :to="menuItem.href"
              >
                {{ menuItem.text }}
              </RouterLink>
            </template>
          </li>
        </ul>
      </nav>
      <div class="hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0">
        <div class="items-center flex justify-between w-full md:w-auto">
          <div class="flex">
            <ToggleTheme iconClass="w-6 h-6 md:w-5 md:h-5 md:inline-block" />
          </div>
          <span class="ml-4 rtl:ml-0 rtl:mr-4">
            <a
              href="https://github.com/onwidget/qwind"
              target="_blank"
              class="btn btn-primary ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto"
            >
              Download
            </a>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Logo from '../common/Logo.vue'
import ToggleTheme from '../common/ToggleTheme.vue'
import ToggleMenu from '../common/ToggleMenu.vue'
import IconChevronDown from '../icons/IconChevronDown.vue'
import { RouterLink } from 'vue-router'


const menu = ref({
  items: [
    {
      text: 'Pages',
      href: '/',
      items: [
        { text: 'Services', href: '#' },
        { text: 'Portfolio', href: '#' },
        { text: 'About us', href: '#' },
        { text: 'Terms', href: '/terms' },
        { text: 'Privacy', href: '/privacy' },
      ]
    },
    { text: 'Blog', href: '/blog' },
  ]
})

const store = ref({
  isScrolling: false,
})

const handleScroll = () => {
  if (!store.value.isScrolling && window.scrollY >= 10) {
    store.value.isScrolling = true
  } else if (store.value.isScrolling && window.scrollY < 10) {
    store.value.isScrolling = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>
