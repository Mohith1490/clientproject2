<template>
    <Hero />
  
    <Features
      highlight="Features"
      title="What you get with Qwind"
      subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."
      :items="featureItems"
    />
  
    <Steps />
  
    <FAQs
      title="Frequently Asked Questions"
      subtitle="Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar."
      highlight="FAQs"
      :items="faqItems"
    />
  
    <Stats />
    <CallToAction />
  </template>
  
  <script setup>
  import Hero from '../components/widgets/Hero.vue';
  import Features from '../components/widgets/Features.vue'
  import Steps from '../components/widgets/Steps.vue'
  import FAQs from '../components/widgets/FAQs.vue'
  import Stats from '../components/widgets/Stats.vue'
  import CallToAction from '../components/widgets/CallToAction.vue'
  
  import IconBrandTailwind from '../components/icons/IconBrandTailwind.vue'
  import IconApps from '../components/icons/IconApps.vue'
  import IconRocket from '../components/icons/IconRocket.vue'
  import IconBrandGoogle from '../components/icons/IconBrandGoogle.vue'
  import IconBulb from '../components/icons/IconBulb.vue'
  import IconStar from '@/components/icons/IconStar.vue';
  
  
  // Feature list
  const featureItems = [
    {
      title: 'Qwik + Tailwind CSS Integration',
      description:
        'A seamless integration between two great frameworks that offer high productivity, performance and versatility.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Ready-to-use Components',
      description:
        'Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...',
      icon: IconApps,
    },
    {
      title: 'Best Practices',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
        icon:IconStar
    },
    {
      title: 'Excellent Page Speed',
      description:
        'Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.',
      icon: IconRocket,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconBrandGoogle,
    },
    {
      title: 'Open to new ideas and contributions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconBulb,
    },
  ]
  
  // FAQ list
  const faqItems = [
    {
      title: 'What do I need to start?',
      description:
        'Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds...',
    },
    {
      title: 'How to install the Qwik + Tailwind CSS template?',
      description:
        'Well, the way they make shows is, they make one show. That show\'s called a pilot...',
    },
    {
      title: "What's something that you don't understand?",
      description:
        'A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear...',
    },
    {
      title: 'What\'s an example of when you changed your mind?',
      description:
        'Michael Knight a young loner on a crusade to champion the cause of the innocent...',
    },
    {
      title: 'What is something that you would like to try again?',
      description:
        'A business big enough that it could be listed on the NASDAQ goes belly up. Disappears!',
    },
    {
      title:
        'If you could only ask one question to each person you meet, what would that question be?',
      description:
        'This is not about revenge. This is about justice. A lot of things can change in twelve years...',
    },
  ]
  </script>
  

  