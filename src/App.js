import React, { useState, useEffect } from 'react';
import './App.css'
import { AnimatePresence } from 'framer-motion';
import { UidContext } from './composants/AppContext';
import Routes from './composants/routes/Routes';
import axios from 'axios';



function App() {
  const [uid, setuid] = useState(null);

  useEffect(() => {
    const fetchToken = async() => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true
      })
      .then((res) => setuid(res.data))
      .catch((err) => console.log("no token"))
    }
    fetchToken();
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
