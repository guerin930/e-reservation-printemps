import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Paiement from './Paiement';


const Booking = () => {
    const [fullname, setfullname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [startDate, setstartDate] = useState("");
    const [endDate, setendDate] = useState("");
    const [typechambre, settypeChambre] = useState("");
    const [nbrchambre, setnbrChambre] = useState("");
    const [nbrEnfant, setnbrEnfant] = useState("");
    const [nbrAdult, setnbrAdult] = useState("");
    const [message, setmessage] = useState("");
    const [formSubmit, setformSubmit] = useState(false);
    const [adresse, setadresse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullnameError = document.querySelector('.fullname.error')
        const emailError = document.querySelector('.email.error')
        const adresseError = document.querySelector('.adresse.error')
        const phoneError = document.querySelector('.phone.error')
        const startDateError = document.querySelector('.startDate.error')
        const endDateError = document.querySelector('.endDate.error')

        const today = new Date()
        const start = new Date(startDate)
        const end = new Date(endDate)
        if (start.getTime() < today.getTime() || start.getTime() > end.getTime()) {
            if (start.getTime() < today.getTime())
                startDateError.innerHTML = "Veuillez choisir une date de depart correcte svp !"
            if (start.getTime() > end.getTime())
                endDateError.innerHTML = "Veuillez choisir une date d'arriver correcte svp !"
            setTimeout(() => {
                startDateError.innerHTML = ""
                endDateError.innerHTML = ""
            }, 3000)
        } else {
            await axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}api/reservation/booking`,
                data: {
                    fullname, email, phone, startDate, endDate, typechambre, nbrchambre, nbrEnfant, nbrAdult, message, adresse
                }
            }).then((res) => {
                console.log(res);
                if (res.data.errors) {
                    fullnameError.innerHTML = res.data.errors.fullname;
                    emailError.innerHTML = res.data.errors.email;
                    adresseError.innerHTML = res.data.errors.adresse;
                    phoneError.innerHTML = res.data.errors.phone;
                } else {
                    setformSubmit(true)
                }
            }).catch((err) => { console.log(err); })
        }
    }


    return (
        <div>
            <div className="navigation">
                <ul>
                    <NavLink to="/PageHebergement" exact className="hover"
                        activeClassName="nav-active">
                        <li className="titre">Retour</li>
                    </NavLink>
                </ul>
            </div>
            {(formSubmit) ? (
                <>
                    <Paiement />
                    <span></span>
                </>
            ) : (<div className="book-form-content">
                <div className="book-form">
                    <form action="" onSubmit={handleSubmit} id="formulaire-responsive" class="clearfix">
                        <div className="wpcf7">
                            <div class="rang-form">
                                <div className="demi-colonne">
                                    <label className="book-lbl" htmlFor="name"> *Nom et Prenom </label>
                                    <br />
                                    <br />
                                    <input
                                        type="text"
                                        name="fullname"
                                        id="fullname"
                                        onChange={(e) => setfullname(e.target.value)}
                                        value={fullname}
                                        autoComplete="off"
                                    />
                                    <div className="fullname error"></div>
                                </div>
                                <div className="demi-colonne">
                                    <label htmlFor="email"> Email </label>
                                    <br />
                                    <br />
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        onChange={(e) => setemail(e.target.value)}
                                        value={email}
                                        autoComplete="off"
                                    />
                                    <div className="email error"></div>
                                </div>
                            </div>
                            <div class="rang-form">
                                <div className="demi-colonne">
                                    <label htmlFor="typechambre"> *Choisissez le type de chambre </label>
                                    <br />
                                    <br />
                                    <select
                                        name="typechambre"
                                        id="typechambre"
                                        value={typechambre}
                                        onChange={(e) => settypeChambre(e.target.value)}
                                    >
                                        <option >Chambre reguliere</option>
                                        <option >Chambre Familiale</option>
                                        <option >Suite</option>
                                        {console.log(typechambre)}
                                    </select>
                                </div>
                                <div className="demi-colonne">
                                    <label htmlFor="nbrAdult"> *Nombre d'adulte(s) </label>
                                    <br />
                                    <br />
                                    <select
                                        name="nbrAdult"
                                        id="nbrAdult"
                                        value={nbrAdult}
                                        onChange={(e) => setnbrAdult(e.target.value)}
                                    >
                                        <option >1</option>
                                        <option >2</option>
                                        <option >3</option>
                                        <option >4</option>
                                    </select>
                                </div>
                            </div>

                            <div class="rang-form">
                                <div class="demi-colonne">
                                    <label htmlFor="adresse"> Votre adresse </label>
                                    <br />
                                    <br />
                                    <input
                                        type="text"
                                        name="adresse"
                                        id="adresse"
                                        onChange={(e) => setadresse(e.target.value)}
                                        value={adresse}
                                        autoComplete="off"
                                    />
                                    <div className="adresse error"></div>
                                </div>
                                <div class="demi-colonne">
                                    <label htmlFor="phone"> *Numero de telephone </label>
                                    <br />
                                    <br />
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        onChange={(e) => setphone(e.target.value)}
                                        value={phone}
                                        autoComplete="off"
                                    />
                                    <div className="phone error"></div>
                                </div>
                            </div>
                            <div class="rang-form">
                                <div class="demi-colonne">
                                    <label htmlFor="nbrchambre"> *Nombre de chambre(s) </label>
                                    <br />
                                    <br />
                                    <select
                                        name="nbrchambre"
                                        id="nbrchambre"
                                        value={nbrchambre}
                                        onChange={(e) => setnbrChambre(e.target.value)}
                                    >
                                        <option >1</option>
                                        <option >2</option>
                                        <option >3</option>
                                        <option >4</option>
                                        <option >5</option>
                                        <option >6</option>
                                        <option >7</option>
                                        <option >8</option>
                                        <option >9</option>
                                        <option >10</option>
                                    </select>
                                </div>
                                <div class="demi-colonne">
                                    <label htmlFor="nbrEnfant"> *Nombre d'enfant(s) </label>
                                    <br />
                                    <br />
                                    <select
                                        name="nbrAdult"
                                        id="nbrAdult"
                                        value={nbrEnfant}
                                        onChange={(e) => setnbrEnfant(e.target.value)}
                                    >
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                            </div>
                            <div class="rang-form">
                                <div className="demi-colonne">
                                    <label htmlFor="startDate"> *Date d'arrivée </label>

                                    <input
                                        type="datetime-local"
                                        name="startDate"
                                        id="startDate"

                                        onChange={(e) => setstartDate(e.target.value)}
                                        value={startDate}
                                    />
                                    <div className="startDate error"></div>
                                </div>
                                <div className="demi-colonne">
                                    <label htmlFor="endDate"> *Date de depart </label>

                                    <input
                                        type="datetime-local"
                                        name="endDate"
                                        id="endDate"
                                        onChange={(e) => setendDate(e.target.value)}
                                        value={endDate}
                                    />
                                    <div className="endDate error"></div>
                                </div>
                            </div>
                            <div class="rang-form">
                                <div className="colonne">
                                    <label htmlFor="endDate"> Autres suggestions </label>
                                    <br />
                                    <br />
                                    <textarea
                                        className="area"
                                        name="message"
                                        id="message"
                                        onChange={(e) => setmessage(e.target.value)}
                                        value={message}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="colonne">
                            <input className="wpcf7-submit" type="submit" value="Soumettre la demande" />
                            <div className="submit error"></div>
                        </div>
                    </form>
                </div>
            </div>)}
        </div>
    );
};

export default Booking;
