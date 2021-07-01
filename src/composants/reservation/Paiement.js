import React from 'react';
import Img from '../../images/customers/transfer.svg'
import PaypalCheckoutButton from '../PaypalCheckoutButton';


const Paiement = ({ datafind }) => {
    let start = datafind.startDate
    let end = datafind.endDate

    const order = {
        customer: `Mr/Mdme ${datafind.fullname}`,
        total: datafind.total,
        items: [{
            sku: 'reservation',
            name: datafind.typechambre,
            price: datafind.total / datafind.nbrchambre,
            quantity: datafind.nbrchambre,
            currency: 'XFA'
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
                                <label className="book-lbl" htmlFor="name">
                                    Mr/Mdme : {datafind.fullname} </label>
                            </div>
                            <div className="demi-colonne">
                                <label className="book-lbl" htmlFor="name">
                                    Adresse : {datafind.adresse} </label>
                            </div>
                        </div>
                        <div class="rang-form">
                            <div className="demi-colonne">
                                <label className="book-lbl" htmlFor="typechambre">
                                    Type de chambre : {datafind.typechambre} </label>
                            </div>
                            <div className="demi-colonne">
                                <label className="book-lbl" htmlFor="nbrchambre">
                                    Nombre de chambre : {datafind.nbrchambre} </label>
                            </div>
                        </div>
                        <div class="rang-form">
                            <div className="demi-colonne">
                                <label className="book-lbl" htmlFor="nbrEnfant">
                                    Nombre d'enfant : {datafind.nbrEnfant} </label>
                            </div>
                            <div className="demi-colonne">
                                <label className="book-lbl" htmlFor="nbrAdult">
                                    Nombre d'adulte : {datafind.nbrAdult} </label>
                            </div>
                        </div>
                        <div class="rang-form">
                            <div className="colonne">
                            <p> Votre Séjour date du  : {start} au {end} </p>
                            </div>
                        </div>
                        <div class="rang-form">
                            <div className="colonne">
                                <p> Votre Facture est de : {datafind.total} XFA veuillez passez au paiment</p>
                                <br />
                                <p>Agréable séjour !</p>
                            </div>
                        </div>
                        <br />
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
                        <div className="colonne">
                            <input className="wpcf7-submit" type="submit" value="Valider la reservation" />
                            <div className="submit error"></div>
                        </div>
                        <p>Merci de nous faire confiance </p>
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