<!-- RouterHead.vue -->
<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'


const head = {
  title: 'Your Page Title',
  meta: [
    { name: 'description', content: 'Your description here' },
    { charset: 'utf-8' },
  ],
  links: [
    { rel: 'stylesheet', href: '/styles.css' },
  ],
  styles: [
    {
      props: { type: 'text/css' },
      style: `.custom-style { color: red; }`,
    },
  ],
}

const route = useRoute()

onMounted(() => {
  document.title = head.title

  const canonical = document.createElement('link')
  canonical.setAttribute('rel', 'canonical')
  canonical.setAttribute('href', window.location.href)
  document.head.appendChild(canonical)

  const viewport = document.createElement('meta')
  viewport.name = 'viewport'
  viewport.content = 'width=device-width, initial-scale=1.0'
  document.head.appendChild(viewport)

  const favicon = document.createElement('link')
  favicon.rel = 'icon'
  favicon.type = 'image/svg+xml'
  favicon.href = '/favicon.svg'
  document.head.appendChild(favicon)

  head.meta.forEach(m => {
    const meta = document.createElement('meta')
    Object.entries(m).forEach(([key, val]) => {
      meta.setAttribute(key, val)
    })
    document.head.appendChild(meta)
  })

  head.links.forEach(l => {
    const link = document.createElement('link')
    Object.entries(l).forEach(([key, val]) => {
      link.setAttribute(key, val)
    })
    document.head.appendChild(link)
  })

  head.styles.forEach(s => {
    const style = document.createElement('style')
    Object.entries(s.props).forEach(([key, val]) => {
      style.setAttribute(key, val)
    })
    style.innerHTML = s.style
    document.head.appendChild(style)
  })
})
</script>
