<template>
  <nav>
    <ul>
      <li>
        <a href="#home-section" @click.prevent="scrollToSection('home-section')"
          >Home</a
        >
      </li>
      <li>
        <a
          href="#about-section"
          @click.prevent="scrollToSection('about-section')"
          >About</a
        >
      </li>
      <li>
        <a
          href="#services-section"
          @click.prevent="scrollToSection('services-section')"
          >Services</a
        >
      </li>
      <li>
        <a
          href="#contact-section"
          @click.prevent="scrollToSection('contact-section')"
          >Contact</a
        >
      </li>
      <li>
        <!-- <audio-player></audio-player> -->
      </li>
      <li>
        <AudioPlayer></AudioPlayer>
      </li>
    </ul>
  </nav>
</template>

<script>
import AudioPlayer from './AudioPlayer.vue';
export default {
  
  name: "Navbar",
  components: {
    AudioPlayer
  },
  data() {
    return {
      audio: null,
      audioSources: [
        "/audios/Ace of Base - Happy Nation.mp3",
        "/audios/Elton John - Im Still Standing.mp3",
        "/audios/Scarface - Push it to the limit.mp3",
      ],
      currentAudioIndex: 0,
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      const yOffset = -30; // Adjust this value to match the height of your navbar
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    },
  },
  
};
</script>

<style scoped>
nav {
  background-color: #000000;
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
