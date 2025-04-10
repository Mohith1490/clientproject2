<template>
    <section class="mx-auto py-8 sm:py-16 lg:py-20" v-if="post">
      <article>
        <header :class="post.image ? 'text-center' : ''">
          <p class="mx-auto max-w-3xl px-4 sm:px-6">
            <time :datetime="String(post.publishDate.getTime())">
              {{ formatDate(post.publishDate) }}
            </time>
          </p>
          <h1 class="leading-tighter font-heading mx-auto mb-8 max-w-3xl px-4 text-4xl font-bold tracking-tighter sm:px-6 md:text-5xl">
            {{ post.title }}
          </h1>
          <img
            v-if="post.image"
            :src="post.image"
            :alt="post.excerpt"
            class="mx-auto mt-4 mb-6 max-w-full bg-gray-400 dark:bg-slate-700 sm:rounded-md lg:max-w-6xl"
            sizes="(max-width: 900px) 400px, 900px"
            loading="eager"
            width="900"
            height="480"
          />
          <div v-else class="mx-auto max-w-3xl px-4 sm:px-6">
            <div class="border-t dark:border-slate-700" />
          </div>
        </header>
        <div
          class="prose-md prose-headings:font-heading prose-headings:leading-tighter container prose prose-lg mx-auto mt-8 max-w-3xl px-6 prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary-600 prose-img:rounded-md prose-img:shadow-lg dark:prose-invert dark:prose-headings:text-slate-300 dark:prose-a:text-primary-400 sm:px-6 lg:prose-xl"
          v-html="renderedMarkdown"
        />
      </article>
    </section>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import MarkdownIt from 'markdown-it';
  
  const route = useRoute();
  const router = useRouter();
  const slug = route.params.slug.split("-").join("");
  
  const post = ref(null);
  const renderedMarkdown = ref('');
  
  const md = new MarkdownIt({
    html: true,
  });
 
  function formatDate(date) {
    return date.toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    });
  }
  </script>
  