<template>
    <nav>
      <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><a href="#about-section" @click.prevent="scrollToSection('about-section')">About</a></li>
      <li><a href="#contact-section" @click.prevent="scrollToSection('contact-section')">Contact</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    padding: 1rem;
    position: fixed;
    width: 100%;
  top: 0;
  z-index: 1000;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  li {
    display: inline;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>