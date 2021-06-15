import React, { useState } from 'react';
import axios from 'axios';
import SignIn from './SignIn';


const SignUp = () => {
    const [pseudo, setpseudo] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [controlPassword, setcontrolPassword] = useState("");
    const [formSubmit, setformSubmit] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        const terms = document.getElementById('terms')
        const pseudoError = document.querySelector('.pseudo.error');
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');
        const passwordConfirmError = document.querySelector('.password-confirm.error');
        const termsError = document.querySelector('.terms.error');

        passwordConfirmError.innerHTML = "";
        termsError.innerHTML = "";
        if (password !== controlPassword || !terms.checked) {
            if (password !== controlPassword)
                passwordConfirmError.innerHTML = "les mots de passe ne correspondent pas";

            if (!terms.checked)
                termsError.innerHTML = "Veuillez valider les conditions generales d'utilisations";
        } else {

            await axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}api/user/register`,
                data: {
                    pseudo,
                    email,
                    password
                }
            })
                .then((res) => {
                    console.log(res);
                    if (res.data.errors) {
                        pseudoError.innerHTML = res.data.errors.pseudo;
                        emailError.innerHTML = res.data.errors.email;
                        passwordError.innerHTML = res.data.errors.password;
                    } else {
                        setformSubmit(true);
                    }
                })
                .catch((err) => console.log(err));
        }

    };
    return (
        <>
            {(formSubmit) ? (
                <>
                    <SignIn />
                    <span></span>
                    <h4 className="success">Enregistement reussi, veuillez vous connectez </h4>
                </>
            ) : (
                <form action="" onSubmit={handleRegister} id="sign-up-form" >
                    <label htmlFor="pseudo">nom d'utilisateur</label>
                    <br />
                    <br />
                    <input
                        type="text"
                        name="pseudo"
                        id="pseudo"
                        onChange={(e) => setpseudo(e.target.value)}
                        value={pseudo}
                        autoComplete="off"
                    />
                    <div className="pseudo error"></div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <br />
                    <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={(e) => setemail(e.target.value)}
                        value={email}
                        autoComplete="off"
                    />
                    <div className="email error"></div>
                    <label htmlFor="password">mot de passe</label>
                    <br />
                    <br />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => setpassword(e.target.value)}
                        value={password}
                        autoComplete="off"
                    />
                    <div className="password error"></div>
                    <label htmlFor="password-conf">Confirmer le mot de passe</label>
                    <br />
                    <br />
                    <input
                        type="password"
                        name="password"
                        id="password-conf"
                        onChange={(e) => setcontrolPassword(e.target.value)}
                        value={controlPassword}
                        autoComplete="off"
                    />
                    <div className="password-confirm error"></div>
                    <br />
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">J'accepte les <a href="/" target="_blank"
                        rel="noopener noreferrer">conditions générales</a></label>
                    <div className="terms error"></div>
                    <input type="submit" value="Valider la demande" />
                    <div className="submit error"></div>
                </form >
            )}
        </>
    );
};

export default SignUp;