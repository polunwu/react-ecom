import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // cents
  const publishableKey =
    'pk_test_51IytIILcGlmBC5HtSzx1PsXDxQQsr8bqagOjjUSIb2NuKryAJe2hQy9UwegRwe531sosVdJ4xq7eaITPFAexkbV700Bv3XfWIB';

  const onToken = (token) => {
    console.log(token);
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert('Payment successful!');
      })
      .catch((error) => {
        console.log('Payment error: ' + JSON.parse(error));
        alert(
          'There was an issue with your payment. Please make sure you use the provide credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
