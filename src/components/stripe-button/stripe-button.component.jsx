import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price}) => {
    const priceForStripe = price * 100; // As price is taken in cents, pennies etc.
    const publishableKey = 'pk_test_51ITY02ETHIENwFcferfZyoqECmLCNpequth3cozJrBNlF1lf0dsL5vPvnfQtpq8kn4r6NX3O1y4rR7oegyYV0idh00dttWxslb'
    // From Stripe

    const onToken = (token) => {
        console.log("Token to Pay:", token);
        // Used as we are not processing any payment 
        alert("Payment Successful");
    }

    return(
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing LTD."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total value is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;