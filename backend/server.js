const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config({path: './config/.env'}) // variable d'environnement
const userRoutes = require('./routes/user.routes');
const bookingRoutes = require('./routes/booking.route');
require('./config/db');
const {checkUser, requireAuth} = require('./middleware/auth.middleware');
const cors = require('cors');

const app = express();

//cors permet de choisir le client de l'api
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false  
}
//middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

//jwt
app.get('*', checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id);
})

//routes
app.use('/api/user', userRoutes)
app.use('/api/reservation', bookingRoutes)

//serveur
app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`);
})