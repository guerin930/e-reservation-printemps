module.exports.signUpErrors = (err) => {
    let errors = { pseudo: '', email: '', password: '' }

    if (err.message.includes('pseudo'))
        errors.pseudo = "Nom d'utilisateur incorrect ou deja existant";

    if (err.message.includes('password'))
        errors.password = 'le mot de passe doit faire au moins 6 caractères minimum';

    if (err.message.includes('email'))
        errors.email = 'Email incorrect';

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
        errors.email = 'Cet Email est deja enregistré';

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
        errors.pseudo = 'Ce Nom est deja utilisé';

    return errors;
};

module.exports.signInErrors = (err) => {
    let errors = {email: '', password: ''}

    if(err.message.includes('email'))
        errors.email = 'Cet email est inconnu';
    
    if(err.message.includes('password'))
        errors.password = 'Email ou mot de passe invalide ';

    return errors;
};