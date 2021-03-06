import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';
import axios from 'axios';


const PaypalCheckoutButton = ({order}, {data}) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/reservation/booking`,
            data: {data}
        }).then((res) => {
            console.log(res);
        }).catch((err) => { console.log(err); })
    }
    const paypalconfig = {
        currency: 'CAD',
        env: 'sandbox',
        client: {
            sandbox: 'AbHRzQ49Zk6UOc5Zdd4JX1iCY_2GjGnB-sGfwkIh_CpD5CW4n9cdx84kaaC6TZx8lTGJ_lmiki2Z0HcJ',
            production: '--id--'
        },
        style: {
            label: 'pay',
            size: 'medium',
            shape: 'rect',
            color: 'gold'
        }
    };
    const PaypalButton = paypal.Button.driver('react', { React, ReactDOM});

    const payment = (data, actions) => {
        const payment = {
            transactions: [
                {
                    amount: {
                        total: order.total,
                        currency: paypalconfig.currency,
                    },
                    description: "paiement reservation",
                    custom: order.customer || '',
                    items_list: {
                        items: order.items
                    }
                }
            ],
            note_to_payer: 'Contactez nous pour toutes declarations',
        };

        return actions.payment.create({payment});
    };

    const onAuthorize = (data, actions) => {
        return actions.payment.execute()
        .then(response => {
            console.log(response);
            alert(`paiement effectué avec success, ID: ${response.id} , votre reservation a été validé a bientot`);
            handleSubmit() 
        })
        .catch(error => {
            console.log(error);
            alert('une erreur est survenue leur du traitement de paiement avec paypal');
        });
    };

    const onError = (error) => {
        console.log(error);
        alert(` le paiment n'a pas été effectué `);
    };

    const onCancel = (data, actions) => {
        alert(`la paiement a été annulé `);
    };
    
    return (
        <PaypalButton 
            env={paypalconfig.env}
            client={paypalconfig.client}
            payment={(data, actions) => payment(data, actions)}
            onAuthorize={(data, actions) => onAuthorize(data, actions)}
            onCancel={(data, actions) => onCancel(data, actions)}
            onError={(error) => onError(error)}
            style= {paypalconfig.style}
            commit
            locale='fr_CA'
        />
    );
};

export default PaypalCheckoutButton;