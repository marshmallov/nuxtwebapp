<template>
  <div>
    <Navbar />
    <div>
    <h1>Payment Status</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="paymentStatus === 'paid'">
      <p>Payment was successful! Thank you for your purchase.</p>
    </div>
    <div v-else>
      <p>Payment was not completed. Please try again.</p>
    </div>
  </div>

    <Footer />
  </div>
</template>
<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import { State } from '../store';

export default {
  name: "SuccessPage",
  components: {
    Navbar,
    Footer,
  
  },
  data() {
    return {
      paymentStatus: null,
      loading: true,
      error: null,
    };
  },
  async mounted() {
    // Extract the session_id from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');

    if (!sessionId) {
      this.error = 'No session ID found in the URL.';
      this.loading = false;
      return;
    }

    try {
      // Fetch the Checkout Session details from the server
      const response = await fetch(`/retrieve-checkout-session?session_id=${sessionId}`);
      const sessionData = await response.json();

      if (sessionData.error) {
        this.error = 'Failed to retrieve the session details.';
      } else if (sessionData.payment_status === 'paid') {
        this.paymentStatus = 'paid';
      } else {
        this.paymentStatus = sessionData.payment_status;
      }
    } catch (err) {
      this.error = 'An error occurred while fetching the session details.';
    } finally {
      this.loading = false;
    }
  },
  setup(){
    State.isHomePage = false;
    
    return {
      State, // Expose the State so you can access isPlaying in your template
      
    };

    
  },
  methods: {

  },
};
</script>
