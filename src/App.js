import React, { useState, useEffect } from 'react';
import './App.css'
import { AnimatePresence } from 'framer-motion';
import { UidContext } from './composants/AppContext';
import Routes from './composants/routes/Routes';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUser } from './actions/user.actions';


function App() {
  const [uid, setuid] = useState(null);
  const dispatch = useDispatch(); // hook d'appel des actions redux

  // le hook useEffect se lance a chaque fois que notre app est lancé
  // et se met a jour a chaque fois que uid evolue lorsqu'on fait un setuid

  useEffect(() => {
    // on se code fetchToken pour recuperer le uid du current user
    // on fais une requete avec axios qui affiche uid si token trouvé

    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true
      })
        .then((res) => setuid(res.data))
        .catch((err) => console.log("no token"))
    }
    fetchToken();
    // on se recupere l'action lorsque le token est actualiser
    //  si uid existe on declecnche l'action getUser ... 
    if (uid) dispatch(getUser(uid));
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <AnimatePresence>
        <Routes />
      </AnimatePresence>
    </UidContext.Provider>
  );
}

export default App;
