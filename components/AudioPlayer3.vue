<template>
    <div class="audio-player">
      <audio ref="audioPlayer" controls>
        <source :src="audioSource" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <!-- <div class="controls"> -->
        <button @click="prevSong" aria-label="Previous Song">
          <i class="fas fa-backward"></i>
        </button>
        <button @click="play" aria-label="Play">
          <i class="fas fa-play"></i>
        </button>
        <button @click="pause" aria-label="Pause">
          <i class="fas fa-pause"></i>
        </button>
        <button @click="nextSong" aria-label="Next Song">
          <i class="fas fa-forward"></i>
        </button>
      <!-- </div> -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        songs: [
          "/audios/Ace of Base - Happy Nation.mp3",
          "/audios/Elton John - Im Still Standing.mp3", // Add more song paths here
          "/audios/Scarface - Push it to the limit.mp3",
        ],
        currentIndex: 0,
      };
    },
    computed: {
      audioSource() {
        return this.songs[this.currentIndex];
      },
    },
    methods: {
      play() {
        this.$refs.audioPlayer.play();
      },
      pause() {
        this.$refs.audioPlayer.pause();
      },
      prevSong() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = this.songs.length - 1;
        }
        this.loadSong();
      },
      nextSong() {
        if (this.currentIndex < this.songs.length - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
        this.loadSong();
      },
      loadSong() {
        this.$refs.audioPlayer.load();
        this.play();
      }
    }
  };
  </script>
  
  <style scoped>
  .audio-player {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 320px; /* Adjust as needed */
  }
  
  audio {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  
  .controls {
    display: flex;
    gap: 15px;
  }
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
    transition: transform 0.2s;
  }
  
  button:focus {
    outline: none;
  }
  
  button i {
    color: #333;
  }
  
  button:hover i {
    color: #007BFF;
    transform: scale(1.2);
  }
  </style>
  
  <!-- Add this to your index.html or include it in your project -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">