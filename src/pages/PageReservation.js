import React, { useState } from 'react';
import Booking from '../composants/reservation/Booking';
import Paypal from '../composants/Paypal';

const PageReservation = () => {
    const [Checkout, setCheckout] = useState(false);
    return (
        <div className="home">
           
            {Checkout ?
                (
                    <Paypal />
                ) : (
                    <button onClick={() => {
                        setCheckout(true)
                    }}>
                        Checkout
                    </button>
                )}
                 <Booking />
        </div>

    );
};

export default PageReservation;