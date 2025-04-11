<template>
  <section class="mx-auto py-8 sm:py-16 lg:py-20" v-if="post">
    <article>
      <header :class="post.image ? 'text-center' : ''">
        <p class="mx-auto max-w-3xl px-4 sm:px-6">
          <time :datetime="String(post.publishDate.getTime())">
            {{ formatDate(post.publishDate) }}
          </time>
        </p>
        <h1
          class="leading-tighter font-heading mx-auto mb-8 max-w-3xl px-4 text-4xl font-bold tracking-tighter sm:px-6 md:text-5xl">
          {{ post.title }}
        </h1>
        <img v-if="post.image" :src="post.image" :alt="post.excerpt"
          class="mx-auto mt-4 mb-6 max-w-full bg-gray-400 dark:bg-slate-700 sm:rounded-md lg:max-w-6xl"
          sizes="(max-width: 900px) 400px, 900px" loading="eager" width="900" height="480" />
        <div v-else class="mx-auto max-w-3xl px-4 sm:px-6">
          <div class="border-t dark:border-slate-700" />
        </div>
      </header>
      <div
        class="prose-md custom-style prose-headings:font-heading prose-headings:leading-tighter container prose prose-lg mx-auto mt-8 max-w-3xl px-6 prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary-600 prose-img:rounded-md prose-img:shadow-lg dark:prose-invert dark:prose-headings:text-slate-300 dark:prose-a:text-primary-400 sm:px-6 lg:prose-xl"
        v-html="post.data" />
    </article>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MarkdownIt from 'markdown-it';
import demopost1 from '@/content/post/demo-post-1';
import demopost2 from '@/content/post/demo-post-2';
import demopost3 from '@/content/post/demo-post-3';
import demopost4 from '@/content/post/demo-post-4';
import demopost5 from '@/content/post/demo-post-5';
import demopost6 from '@/content/post/demo-post-6';

const md = new MarkdownIt();
const route = useRoute();
const router = useRouter();
const slug = route.params.slug.split("-").join("");

const data = {
  demopost1: {
    publishDate: "2023-02-02T00:00:00Z",
    title: "Nulla amet fugiat qui minim deserunt enim eu",
    excerpt: "Sint sit cillum pariatur eiusmod nulla pariatur ipsum.",
    image: "https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    data:md.render(demopost1)
  },
  demopost2: {
    publishDate: "2023-02-03T00:00:00Z",
    title: "Nulla amet fugiat qui minim deserunt enim eu cupidatat",
    excerpt: "Sint sit cillum pariatur eiusmod nulla pariatur ipsum.",
    image: "https://images.unsplash.com/photo-1639503611585-1054af5dbfab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    data:md.render(demopost2)
  },
  demopost3: {
    publishDate: "2023-02-04T00:00:00Z",
    title: "Do excepteur laborum anim esse",
    excerpt: "Sint sit cillum pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur nisi minim dolor. Aliquip et adipisicing sit sit fugiat",
    image: "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2592&q=80",
    data:md.render(demopost3)
  },
  demopost4: {
    publishDate: "2023-02-04T00:00:00Z",
    title: "Aliquip et adipisicing sit sit fugiat commodo",
    excerpt: "Sint sit cillum pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur nisi minim dolor. Aliquip et adipisicing sit sit fugiat",
    image: "https://images.unsplash.com/photo-1638957319391-9b81b996afca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2592&q=80",
    data:md.render(demopost4)
  },
  demopost5: {
    publishDate: "2023-02-05T00:00:00Z",
    title: "Ad irure duis nisi tempor eu dolor fugiat magna",
    excerpt: "Sint sit cillum pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur nisi minim dolor. Aliquip et adipisicing sit sit fugiat",
    image: "https://images.unsplash.com/photo-1637118259230-eaa1088f8168?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80",
    data:md.render(demopost5)
  },
  demopost6: {
    publishDate: "2023-02-06T00:00:00Z",
    title: "Ut laborum cillum laboris fugiat culpa",
    excerpt: "Sint sit cillum pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur nisi minim dolor. Aliquip et adipisicing sit sit fugiat",
    image: "https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1696&q=80",
    data:md.render(demopost6)
  }
}

const post = ref(data[slug]);
if (post.value) {
  post.value.publishDate = new Date(post.value.publishDate);
}

const renderedMarkdown = md.render(slug);
console.log(renderedMarkdown)


function formatDate(date) {
  return date.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
</script>

<style >
   /* Typography */
   .custom-style h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-top: 2rem;
  line-height: 1.2;
}

.custom-style h2 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-top: 2rem;
  line-height: 1.3;
}

.custom-style h3 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-top: 2rem;
  line-height: 1.4;
}

.custom-style h4 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 2rem;
  line-height: 1.4;
}

.custom-style h5 {
  font-size: 1rem;
  font-weight: 500;
  margin-top: 2rem;
  line-height: 1.4;
}

.custom-style p {
  font-size: 1.2rem;
  line-height: 1.7;
  margin-top: 1rem;
  color: #333;
}

.custom-style a {
  color: #0077cc;
  text-decoration: none;
  transition: all 0.3s ease;
}

.custom-style a:hover {
  text-decoration: underline;
}

.custom-style em {
  font-style: italic;
  color: #555;
}

.custom-style ul,
.custom-style ol {
  margin-top: 1rem;
  margin-left: 1.5rem;
  padding-left: 1rem;
}

.custom-style li {
  margin-top: 0.5rem;
  line-height: 1.6;
}

.custom-style hr {
  border: none;
  border-top: 1px solid #ccc;
  margin: 2rem 0;
}

.custom-style table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
}

.custom-style thead {
  background-color: #f0f0f0;
}

.custom-style tr {
  border-bottom: 1px solid #ddd;
}

.custom-style th,
.custom-style td {
  text-align: left;
  padding: 0.75rem 1rem;
}

.custom-style th {
  font-weight: bold;
  background-color: #f9f9f9;
}

.custom-style tbody tr:nth-child(even) {
  background-color: #fafafa;
}

</style>