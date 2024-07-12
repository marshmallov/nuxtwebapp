<template>
  <div class="parallax-container">
    <div
      class="parallax-item"
      style="background-image: url('/images/IMG_1.jpg')"
    >
      <div class="parallax-content">
        <div class="content-card">
          <h1>O'Vonel</h1>
          <p>
            <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. -->
          </p>
        </div>
      </div>
    </div>
    <div
      class="parallax-item"
      style="background-image: url('/images/IMG_2.jpg')"
    >
      <div class="parallax-content">
        <div class="content-card">
          <h2>Post Title 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
    <div
      class="parallax-item"
      style="background-image: url('/images/IMG_3.jpg')"
    >
      <div class="parallax-content">
        <div class="content-card">
          <h2>Post Title 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
    <div
      class="parallax-item"
      style="background-image: url('/images/IMG_4.jpg')"
    >
      <div class="parallax-content">
        <div class="content-card">
          <h1>O'Vonel</h1>
          <p>
            <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'About'
}
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  overflow-x: hidden;
}

.parallax-container {
  display: flex;
  flex-direction: column;
}

.parallax-item {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover; /* Ensures the background image covers the full viewport */
  background-position: center; /* Centers the background image */
  background-attachment: fixed; /* Creates the parallax effect */
}

.parallax-content {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%; /* Ensures the content card takes up the full height of the viewport */
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-card {
  background-color: rgba(255, 255, 255, 0); /* Transparency for the content card */
  padding: 2rem;
  border-radius: 8px;
  /* box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2); */
  max-width: 600px; /* Optional: limits the width of the card */
  text-align: center; /* Centers the text */
}

h1 {
  font-size: 10rem;
  margin-bottom: 1rem;
  color: #ffffff;
}
h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

p {
  color: #ffffff;
}
</style>