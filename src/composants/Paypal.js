import React, { useRef, useEffect } from 'react';

const Paypal = () => {

    const paypal = useRef()

    useEffect(() => { 
      Window.paypal.Buttons({
        createOrder: (data, actions, err) => {
            return actions.order.create({
                intent: "CAPTURE",
                purchase8units: [
                    {
                        name: "paiement en ligne",
                        description: "Reservation",
                        quantity: 1,
                        amount: {
                            currency_code: "CAD",
                            value: 100.00,
                        },
                    },
                ],
            })
        },
        onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log(order);
        },
        onError: (err) => {
            console.log(err);
        }
      }).render(paypal.current)
    }, [paypal])

    return (
        <div>
            <div ref={Paypal}></div>
        </div>
    );
};

export default Paypal;