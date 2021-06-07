import React, {useState} from 'react';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (
        <form action="#" onSubmit={handleLogin} id="sign-in-form">
            <label htmlFor="email">Email</label>
            <br />
            <br />
            <input
                type="text"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <div className="email error"></div>
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <br />
            <input
                type="text"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <div className="password error"></div>
            <br />
            <input type="submit" value="se connecter" />
        </form>
    );
};

export default SignIn;