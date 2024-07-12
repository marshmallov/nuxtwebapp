<template>
    <div class="card">
      <img :src="project.image" alt="Project Image">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Card',
    props: {
      project: Object
    }
  }
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 1rem;
    text-align: center;
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
  </style>