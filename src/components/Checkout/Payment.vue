<template>
     <div class="max-w-[400px]">
          <div class="mb-5">
               <div class="font-semibold text-gray-600 mb-1">Card Number</div>
               <div ref="cardNumberElement" id="card-number"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
               <div>
                    <div class="font-semibold text-gray-600 mb-1">Expiry</div>
                    <div ref="cardExpiryElement" id="card-expiry"></div>
               </div>
               <div>
                    <div class="font-semibold text-gray-600 mb-1">CVC</div>
                    <div ref="cardCvcElement" id="card-cvc"></div>
               </div>
          </div>
          <div class="text-right mt-5">
               <EShopButton btn-text="Pay USD 50" :onclick="handlePayment" />
          </div>

     </div>
</template>
   
<script setup>
import { ref, onMounted } from 'vue';
import { STRIPE_PK } from '../../api';
import { loadStripe } from '@stripe/stripe-js';
import { EShopButton } from '../shared';


const cardNumberElement = ref(null);
const cardExpiryElement = ref(null);
const cardCvcElement = ref(null);
const stripe = ref(null);

onMounted(() => {
     setupCardElement();
});
const setupCardElement = async () => {
     stripe.value = await loadStripe(STRIPE_PK);
     const elements = stripe.value.elements();
     const cardNumber = elements.create('cardNumber', { showIcon: true, });
     const cardExpiry = elements.create('cardExpiry');
     const cardCvc = elements.create('cardCvc');
     cardNumber.mount('#card-number');
     cardExpiry.mount('#card-expiry');
     cardCvc.mount("#card-cvc");
     cardNumber.on('change', event => {
          // Handle validation errors and update UI accordingly
     });
     cardNumberElement.value = cardNumber;
     cardExpiryElement.value = cardExpiry;
     cardCvcElement.value = cardCvc;
};

const handlePayment = async () => {
     const { token } = await stripe.value.createToken(cardNumberElement.value);
     console.log(token)
};

</script>
   
<style>
#card-number,
#card-cvc,
#card-expiry {
     /* styles */
     padding: 12px;
     background-color: white;
     border-radius: 5px;
     border: 1px solid lightgray;
}

/* #card-number>input {} */
</style>
   