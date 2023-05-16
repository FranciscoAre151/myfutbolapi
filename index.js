
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 9000;
const bodyParser = require('body-parser');

const logger = require('./logs/logger.js')

require('dotenv').config()

const authRoutes = require('./routes/auth');
const matchRoutes = require('./routes/partidos.js')
const dashboadRoutes = require('./routes/dashboard');
const verifyToken = require('./middlewares/validate-token.js');

const updateRoutes = require('./routes/update');
const verifyAdmin = require('./middlewares/validate-admin.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/user", authRoutes);
app.use('/api/dashboard', verifyToken, dashboadRoutes);
app.use('/api/update', verifyAdmin, updateRoutes);
app.use("/api/partidos", matchRoutes);


if (process.env.NODE_ENV === 'test'){
    mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.trmcpux.mongodb.net/${process.env.DBNAMETEST}?retryWrites=true&w=majority`);
}else{
    mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.trmcpux.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`);
}

const server = app.listen(port,() => logger.info(`server listening on port ${port}`));


module.exports = {app , server};