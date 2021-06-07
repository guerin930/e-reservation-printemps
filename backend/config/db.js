const mongoose = require('mongoose');

mongoose
    .connect("mongodb://localhost:27017/project",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }
    )
    .then(() => console.log("connected on mongodb success"))
    .catch((err) => console.log("erreur de connexion a mongodb ", err));
    