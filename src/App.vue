<script setup>
import Header from './components/widgets/Header.vue';
import Footer from './components/widgets/Footer.vue';
import Home from './views/Home.vue';
</script>

<template>
   <div>
    <Header/>
    <RouterView/>
    <Footer/>
   </div>
</template>

