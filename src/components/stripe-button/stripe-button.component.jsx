import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const config =  {publishableKey: process.env.REACT_APP_PUBLISHABLE_API_KEY}

    const onToken = (token) => {
    alert('Payment Successful');
    }

    return (
        <div>
            <StripeCheckout 
            label="Pay Now"
            name="e-commerce"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token = {onToken}
            stripeKey={config.publishableKey}
            />
        </div>
    )
}


export default StripeCheckoutButton;