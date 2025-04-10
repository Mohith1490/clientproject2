<template>
  <section class="px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-3xl">
    <header>
      <h1 class="text-center text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-8 md:mb-16 font-heading">
        Blog
      </h1>
    </header>
    <ul>
      <li v-for="post in posts" :key="post.slug" class="mb-10 md:mb-16">
        <article class="max-w-md mx-auto md:max-w-none grid gap-6 md:gap-8" :class="{ 'md:grid-cols-2': post.image }">
          <a v-if="post.image" class="relative block group" :href="`/blog/${post.slug}`">
            <div class="relative h-0 pb-[56.25%] md:pb-[75%] md:h-80 lg:pb-[56.25%] overflow-hidden bg-gray-400 dark:bg-slate-700 rounded shadow-lg">
              <img :src="post.image"
                class="absolute inset-0 object-cover w-full h-full mb-6 rounded shadow-lg bg-gray-400 dark:bg-slate-700"
                sizes="(max-width: 900px) 400px, 900px" :alt="post.title" width="900" height="400" />
            </div>
          </a>
          <div>
            <header>
              <h2 class="text-xl sm:text-2xl font-bold leading-snug mb-2 font-heading">
                <RouterLink
                  class="hover:text-primary-600 underline underline-offset-4 decoration-1 decoration-dotted transition ease-in duration-200"
                  :to="`/blog/${post.slug}`">
                  {{ post.title }}
                </RouterLink>
              </h2>
            </header>
            <p class="text-md sm:text-lg flex-grow">{{ post.excerpt }}</p>
            <footer class="mt-4">
              <div>
                <span class="text-gray-500 dark:text-slate-400">
                  <time :datetime="String(new Date(post.publishDate).getTime())">
                    {{ formatDate(post.publishDate) }}
                  </time>
                </span>
              </div>
            </footer>
          </div>
        </article>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';

// Sample post data
const posts = [
  {
    publishDate: "2023-02-02T00:00:00Z",
    title: "Nulla amet fugiat qui minim deserunt enim eu",
    excerpt: "Sint sit cillum pariatur eiusmod nulla pariatur ipsum.",
    image: "https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    slug: "demo-post-1"
  },
  {
    publishDate: "2023-02-03T00:00:00Z",
    title: "Nulla amet fugiat qui minim deserunt enim eu cupidatat",
    excerpt: "Sint sit cillum pariatur eiusmod nulla pariatur ipsum.",
    image: "https://images.unsplash.com/photo-1639503611585-1054af5dbfab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    slug: "demo-post-2"
  },
  {
    publishDate: "2023-02-04T00:00:00Z",
  title: "Do excepteur laborum anim esse",
  excerpt: "Sint sit cillum pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur nisi minim dolor. Aliquip et adipisicing sit sit fugiat",
  image: "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2592&q=80",
  slug: "demo-post-3"
  },{
  publishDate: "2023-02-04T00:00:00Z",
  title: "Aliquip et adipisicing sit sit fugiat commodo",
  excerpt: "Sint sit cillum pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur nisi minim dolor. Aliquip et adipisicing sit sit fugiat",
  image: "https://images.unsplash.com/photo-1638957319391-9b81b996afca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2592&q=80",
  slug: "demo-post-4"
},
{
  publishDate: "2023-02-05T00:00:00Z",
  title: "Ad irure duis nisi tempor eu dolor fugiat magna",
  excerpt: "Sint sit cillum pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur nisi minim dolor. Aliquip et adipisicing sit sit fugiat",
  image: "https://images.unsplash.com/photo-1637118259230-eaa1088f8168?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80",
  slug: "demo-post-5"
},
{
  publishDate: "2023-02-06T00:00:00Z",
  title: "Ut laborum cillum laboris fugiat culpa",
  excerpt: "Sint sit cillum pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur nisi minim dolor. Aliquip et adipisicing sit sit fugiat",
  image: "https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1696&q=80",
  slug: "demo-post-6"
}

  // Add other posts as needed
];

// Function to format the date
function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
</script>
 