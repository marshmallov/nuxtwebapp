<template>
  <div class="">
    <div class="flex items-center">
      <div class="track-info overflow-hidden relative">
        <div
          class="marquee text-white whitespace-nowrap overflow-hidden relative"
        >
          {{ currentTrack.name }} - {{ currentTrack.artist }}
        </div>
      </div>

      <div class="text-white" @click="prevTrack">
        <svg
          class="w-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
        </svg>
      </div>
      <div class="text-white" @click="playPauseTrack">
        <svg
          v-if="!State.isPlaying"
          class="w-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M 5 16 V 4 l 11 6 l -11 6 z" />
        </svg>
        <svg
          v-else
          class="w-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
        </svg>
      </div>
      <div class="text-white" @click="nextTrack">
        <svg
          class="w-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M4 4l8 6-8 6V4zm10 0h2v12h-2z" />
        </svg>
      </div>
      <div class="mx-8">
        <div class="flex justify-between text-sm text-white">
          <p>{{ formatTime(currentTime) }}</p>
          /
          <p>{{ formatTime(duration) }}</p>
        </div>
        <div class="mt-1">
          <div class="bg-grey-dark rounded-full">
            <div
              :style="{ width: progress + '%' }"
              class="bg-red-light rounded-full relative"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <audio ref="audio" @timeupdate="updateTime"></audio>
  </div>
</template>
Script Update your script to handle the audio logic: javascript Skopiuj kod


<script >
import { State } from '../store';
export default {
  setup(){
    return {
      State, // Expose the State so you can access isPlaying in your template
    };
  },
  data() {
    return {
      songs: [
        {
          name: "Push it to the Limit",
          artist: "Scarface",
          path: "/audios/Scarface - Push it to the limit.mp3",
        },
        {
          name: "Shadows Of The Night",
          artist: "Gigi D'Agostino & Boostedkids",
          path: "/audios/Gigi D'Agostino & Boostedkids - Shadows Of The Night.mp3",
        },
        {
          name: "Happy Nation",
          artist: "Ace of Base",
          path: "/audios/Ace of Base - Happy Nation.mp3",
        },
      ],
      currentIndex: 0,
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      volume: 99,
    };
  },
  computed: {
    currentTrack() {
      return this.songs[this.currentIndex];
    },
    progress() {
      return (this.currentTime / this.duration) * 100;
    },
  },
  methods: {
    playPauseTrack() {
      if (!this.State.isPlaying) this.playTrack();
      else this.pauseTrack();
      this.$emit('updateIsPlaying', this.isPlaying);
    },
    playTrack() {
      this.$refs.audio.play();
      this.State.isPlaying = true;
    },
    pauseTrack() {
      this.$refs.audio.pause();
      this.State.isPlaying = false;
    },
    nextTrack() {
      if (this.currentIndex < this.songs.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      this.loadTrack();
    },
    prevTrack() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.songs.length - 1;
      }
      this.loadTrack();
    },
    loadTrack() {
      this.$refs.audio.src = this.currentTrack.path;
      this.$refs.audio.load();
      this.playTrack();
    },
    seekTo(event) {
      const { value } = event.target;
      this.$refs.audio.currentTime = (value / 100) * this.duration;
    },
    setVolume(event) {
      const { value } = event.target;
      this.$refs.audio.volume = value / 100;
    },
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    },
    updateTime() {
      this.currentTime = this.$refs.audio.currentTime;
      this.duration = this.$refs.audio.duration;
    },
  },
  mounted() {
    this.loadTrack();
    // this.isPlaying = true;
    this.$refs.audio.play();
    this.playPauseTrack();
  },
};
</script>
<style scoped>
body {
  background-color: lightgreen;

  /* Smoothly transition the background color */
  transition: background-color 0.5s;
}

/* Using flex with the column direction to
   align items in a vertical direction */
.player {
  height: 95vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.track-info {
  width: 150px; /* Adjust the width as needed */
}

.marquee {
  display: inline-block;
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
