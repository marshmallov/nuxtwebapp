<template>
  <div>
  <!-- <Tutorial/> -->
  <Navbar/>
  <MainContent/>
  <Footer/>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import MainContent from '../components/MainContent.vue';

export default {
  name: 'IndexPage',
  components: {
    Navbar,
    Footer,
    MainContent
  }
}
</script>
