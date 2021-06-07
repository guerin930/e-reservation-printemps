import React, {useState} from 'react';

const SignUp = () => {
    const [pseudo, setpseudo] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [controlPassword, setcontrolPassword] = useState("");

    const handleRegister = async () => {

    }
    return (
        <form action="" onSubmit={handleRegister} id="sign-up-form" >
            <label htmlFor="pseudo">nom d'utilisateur</label>
            <br />
            <br />
            <input
                type="text"
                name="pseudo"
                id="pseudo"
                onChange= {(e) => setpseudo(e.target.value)}
                value={pseudo}
                autoComplete="off"
                />
            <div className="pseudo error"></div>
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <br />
            <input
                type="text"
                name="email"
                id="email"
                onChange= {(e) => setemail(e.target.value)}
                value={email}
                autoComplete="off"
                />
            <div className="email error"></div>
            <br />
            <label htmlFor="password">mot de passe</label>
            <br />
            <br />
            <input
                type="password"
                name="password"
                id="password"
                onChange= {(e) => setpassword(e.target.value)}
                value={password}
                autoComplete="off"
                />
            <div className="password error"></div>
            <br />
            <label htmlFor="password-conf">Confirmer le mot de passe</label>
            <br />
            <br />
            <input
                type="password"
                name="password"
                id="password-conf"
                onChange= {(e) => setcontrolPassword(e.target.value)}
                value={controlPassword}
                autoComplete="off"
                />
            <br />
            <br />
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">J'accepte les <a href="/" target="_blank" 
            rel="noopener noreferrer">conditions générales</a></label>
            <div className="password-confirm error"></div>
            <div className="terms error"></div>
            <br />
            <input type="submit" value="Valider la demande" />
        </form >
    );
};

export default SignUp;