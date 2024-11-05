import { loadStripe } from '@stripe/stripe-js'


let stripePromise = null

export default async function getStripe() {
    if (!stripePromise) {
      const stripeApiKey = process.env.NUXT_STRIPE_PUBLIC_KEY
    //   console.log('Stripe API Key:', stripeApiKey)  // Add this line for debugging
      if (!stripeApiKey) {
        console.error('Stripe API key is missing.')
        return null
      }
      stripePromise = loadStripe(stripeApiKey)
    }
    return stripePromise
}

