import React, {useState} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Login = (props) => {
    const [signUpModal, setSignUpModal] = useState(props.signUp);
    const [signInModal, setsignInModal] = useState(props.signIn);

    const handleModal = (e) => {
        if (e.target.id === "register") {
            setSignUpModal(true);
            setsignInModal(false);
        } else if (e.target.id === "login") {
            setsignInModal(true);
            setSignUpModal(false);
        }
    }

    return (
        <div className="connection-form">
            <div className="form-container">
                <ul>
                    <li
                        onClick={handleModal}
                        id="register"
                        className={signUpModal ? "active-btn" : null}
                    >
                        S'inscrire
                    </li>
                    <li
                        onClick={handleModal}
                        id="login"
                        className={signInModal ? "active-btn" : null}
                    >
                        Se Connecter
                    </li>
                </ul>
                {signUpModal && <SignUp />}
                {signInModal && <SignIn />}
            </div>
        </div>
    );
};

export default Login;