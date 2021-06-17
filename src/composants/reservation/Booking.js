import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Booking = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [startDate, setstartDate] = useState("");
    const [endDate, setendDate] = useState("");
    const [typeChambre, settypeChambre] = useState("");
    const [nbrChambre, setnbrChambre] = useState("");
    const [nbrEnfant, setnbrEnfant] = useState("");
    const [nbrAdult, setnbrAdult] = useState("");
    const [message, setmessage] = useState("");
    const [annulation, setannulation] = useState(false);
    const [adresse, setadresse] = useState("");

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
            <div className="book-form-content">
                <div className="book-form">
                    <form action="" id="formulaire-responsive" class="clearfix">
                        <div className="wpcf7">
                            <div class="rang-form">
                                <div className="demi-colonne">
                                    <label className="book-lbl" htmlFor="name"> *Nom et Prenom </label>
                                    <br />
                                    <br />
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        onChange={(e) => setname(e.target.value)}
                                        value={name}
                                        autoComplete="off"
                                    />
                                    <div className="name error"></div>
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
                                    <label htmlFor="typeChambre"> *Choisissez le type de chambre </label>
                                    <br />
                                    <br />
                                    <select
                                        name="typeChambre"
                                        id="typeChambre"
                                        onChange={(e) => settypeChambre(e.target.value)}
                                    >
                                        <option value={typeChambre}>Chambre reguliere</option>
                                        <option value={typeChambre}>Chambre Familiale</option>
                                        <option value={typeChambre}>Suite</option>
                                    </select>
                                    <div className="typeChambre error"></div>
                                </div>
                                <div className="demi-colonne">
                                    <label htmlFor="nbrAdult"> *Nombre d'adulte(s) </label>
                                    <br />
                                    <br />
                                    <select
                                        name="nbrAdult"
                                        id="nbrAdult"
                                        onChange={(e) => setnbrAdult(e.target.value)}
                                    >
                                        <option value={nbrAdult}>1</option>
                                        <option value={nbrAdult}>2</option>
                                        <option value={nbrAdult}>3</option>
                                        <option value={nbrAdult}>4</option>
                                    </select>
                                    <div className="nbrAdult error"></div>
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
                                    <label htmlFor="nbrChambre"> *Nombre de chambre(s) </label>
                                    <br />
                                    <br />
                                    <select
                                        name="nbrChambre"
                                        id="nbrChambre"
                                        onChange={(e) => setnbrChambre(e.target.value)}
                                    >
                                        <option value={nbrChambre}>1</option>
                                        <option value={nbrChambre}>2</option>
                                        <option value={nbrChambre}>3</option>
                                        <option value={nbrChambre}>4</option>
                                        <option value={nbrChambre}>5</option>
                                        <option value={nbrChambre}>6</option>
                                        <option value={nbrChambre}>7</option>
                                        <option value={nbrChambre}>8</option>
                                        <option value={nbrChambre}>9</option>
                                        <option value={nbrChambre}>10</option>
                                        <option value={nbrChambre}>11</option>
                                        <option value={nbrChambre}>12</option>
                                        <option value={nbrChambre}>13</option>
                                        <option value={nbrChambre}>14</option>
                                        <option value={nbrChambre}>15</option>
                                        <option value={nbrChambre}>16</option>
                                        <option value={nbrChambre}>17</option>
                                        <option value={nbrChambre}>18</option>
                                        <option value={nbrChambre}>19</option>
                                        <option value={nbrChambre}>20</option>
                                    </select>
                                    <div className="not error"></div>
                                </div>
                                <div class="demi-colonne">
                                    <label htmlFor="nbrEnfant"> *Nombre d'enfant(s) </label>
                                    <br />
                                    <br />
                                    <select
                                        name="nbrAdult"
                                        id="nbrAdult"
                                        onChange={(e) => setnbrEnfant(e.target.value)}
                                    >
                                        <option value={nbrEnfant}>1</option>
                                        <option value={nbrEnfant}>2</option>
                                        <option value={nbrEnfant}>3</option>
                                    </select>
                                    <div className="not error"></div>
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
                                    <div className="not error"></div>
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
                                    <div className="not error"></div>
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
            </div>
        </div>
    );
};

export default Booking;
