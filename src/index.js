
import express from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import logger from './logs/logger.js';
import authRoutes  from './routes/auth.js';
import matchRoutes from './routes/partidos.js';
import dashboadRoutes from './routes/dashboard.js';
import verifyToken from './middlewares/validate-token.js';
import updateRoutes from './routes/update.js';
import verifyAdmin from './middlewares/validate-admin.js';

const app = express();
const port = 9000;

require('dotenv').config()

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