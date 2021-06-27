import React from 'react';
import Img from '../../images/customers/transfer.svg'
import PaypalCheckoutButton from '../PaypalCheckoutButton';

const Paiement = () => {
    const order = {
        customer: 'Mr/Mdme',
        total: '22.25',
        items: [{
            sku: 'reservation',
            name: 'chambre',
            price: '22.25',
            quantity: 1,
            currency: 'CAD'
        }]
    };
    return (
        <div className="profil-page">
            <div className="book-form-content">
                <div className="pay-form">
                    <div className="wpcf7">
                        <h3 className="success">votre demande a été envoyer Veuillez procédé au paiement</h3>
                        <div class="rang-form">
                            <div className="demi-colonne">
                                <label className="book-lbl" htmlFor="name"> Nom </label>
                            </div>
                            <div className="demi-colonne">
                                <label className="book-lbl" htmlFor="name"> Nom </label>
                            </div>
                        </div>
                        <div class="rang-form">
                            <div className="demi-colonne">
                                <label className="book-lbl" htmlFor="name"> Nom </label>
                            </div>
                            <div className="demi-colonne">
                                <label className="book-lbl" htmlFor="name"> Nom </label>
                            </div>
                        </div>
                        <div class="rang-form">
                            <div className="demi-colonne">
                                <label className="book-lbl" htmlFor="name"> Nom </label>
                            </div>
                            <div className="demi-colonne">
                                <label className="book-lbl" htmlFor="name"> Nom </label>
                            </div>
                        </div>
                        <div class="rang-form">
                            <div className="colonne">
                                <h4>Nos moyens de paiement</h4>
                            </div>
                        </div>
                        <div class="rang-form">
                            <div className="colonne">
                                <PaypalCheckoutButton order={order} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-container">
                                    <img src={Img} alt="login" />
                                </div>
        </div>
    );
};

export default Paiement;