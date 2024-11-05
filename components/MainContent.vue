<template>
  <div class="parallax-container">
    <section id="home-section">
      <div
        class="parallax-item"
        style="background-image: url('/images/IMG_1.jpg')"
      >
        <div class="parallax-content">
          <div class="content-card">
            <h1>Ovonel</h1>
            <p>
              <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. -->
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="about-section">
      <div
        class="parallax-item"
        style="background-image: url('/images/IMG_2.jpg')"
      >
        <div class="parallax-content">
          <div class="content-card">
            <!-- <h2>Post Title 2</h2> -->
            <p>
              Ovonel is a dynamic and rapidly growing technology company
              specializing in innovative software solutions and IT services.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="services-section">
      <div
        class="parallax-item"
        style="background-image: url('/images/IMG_3.jpg')"
      >
        <div class="parallax-content">
          <div class="content-card">
            <div class="text-white">
              <div class="icon-container" >
                <!-- play pasue button  -->
                <svg
                  v-if="!State.isPlaying"
                  class="w-20"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M 5 16 V 4 l 11 6 l -11 6 z" />
                </svg>
                <svg
                  v-else
                  class="w-20"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                </svg>
              </div>
            </div>
            <div :class="{ spin: State.isPlaying }">
              <!-- Apply `spin` class conditionally when `isPlaying` is true -->
              <img
                src="/images/vinyl_disc.jpg"
                alt="Contact Image"
                class="circle-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact-section">
      <div
        class="parallax-item"
        style="background-image: url('/images/IMG_4.jpg')"
      >
        <div class="parallax-content">
          <div class="content-card">
            <!-- <h2>Post Title 4</h2> -->
            <p>
              <button @click="checkout">Buy Now</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { State } from "../store";
import getStripe from "~/plugins/stripe";
import AudioPlayer from "./AudioPlayer.vue";

export default {
  name: "About",
  setup() {
    State.isHomePage = true;
    return {
      State,
      AudioPlayer, // Expose the State so you can access isPlaying in your template
    };
  },
  methods: {
    // This method could be used to receive and update isPlaying from the audio player component.
 

    async checkout() {
      
      const stripe = await getStripe();
      if (!stripe) {
        console.error("Stripe instance couldn't be loaded.")
        return;
      }

      stripe.redirectToCheckout({
        lineItems: [{ price: "price_1QG4ytCcCbod9zFrB2BIgGrx", quantity: 1 }], // Replace with your price ID
        mode: "payment",
        successUrl: `${window.location.origin}/`,
        cancelUrl: `${window.location.origin}/`,
      });
      
    },
  },
};
</script>

<style scoped>
html,
body {
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
.circle-image {
  width: 550px; /* Adjust size as needed */
  height: 550px; /* Make it a square */
  border-radius: 50%; /* This makes it a circle */
  object-fit: cover; /* Ensures the image fills the circle without distortion */
  border: 1px solid white;
  background-attachment: fixed;
  background-size: cover;
}
.icon-container {
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically */
  position: absolute; /* Position it absolutely */
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Adjust for element size */
  z-index: 1;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.spin {
  animation: spin 4s linear infinite;
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
  background-color: rgba(
    255,
    255,
    255,
    0
  ); /* Transparency for the content card */
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
