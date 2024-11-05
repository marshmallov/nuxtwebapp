<template>
  <nav class="">
    <div class=" ">
      <div class="flex flex-col md:flex-row justify-between ">
        <ul v-if= "State.isHomePage" class="">
          <li>
            <a href="#home-section" @click.prevent="scrollToSection('home-section')" class="text-white">Home</a>
          </li>
          <li>
            <a href="#about-section" @click.prevent="scrollToSection('about-section')" class="text-white">About</a>
          </li>
          <li>
            <a href="#services-section" @click.prevent="scrollToSection('services-section')" class="text-white">Services</a>
          </li>
          <li>
            <a href="#contact-section" @click.prevent="scrollToSection('contact-section')" class="text-white">Contact</a>
          </li>
        </ul>
        <ul v-else= "State.isHomePage" class="">
          <li>
            <a class="text-white"><NuxtLink to="/">Back to Home</NuxtLink></a>
          </li>
        </ul>
        <div class="  ">
          <AudioPlayer ref="AudioPlayer"/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { State } from '../store';
import AudioPlayer from './AudioPlayer.vue';
export default {
  
  name: "Navbar",
  components: {
    AudioPlayer
  },
  setup(){
    return {
      State, // Expose the State so you can access isPlaying in your template
    };
  },
  data() {
    return {
      audio: null,
      audioSources: [
        "assets/audios/Ace of Base - Happy Nation.mp3",
        "assets/audios/Elton John - Im Still Standing.mp3",
        "assets/audios/Scarface - Push it to the limit.mp3",
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
