import express, { Request, Response } from 'express';
import bodyParser from "body-parser";

import session from 'express-session';

import bluebird from 'bluebird';
import cors from 'cors';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { defaultRouter } from './routes';
import { MONGODB_URI, SESSION_SECRET } from './util/secrets';
import { updateTimeEntry } from './controllers/timeController';

const MongoStore = require('connect-mongo');

const app = express();
const IPV4_ADD = "192.168.162.41";
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
const ENVIRONMENT = process.env.NODE_ENV;
const mongoUrl = MONGODB_URI;
mongoose.Promise = bluebird;

if (ENVIRONMENT !== 'test') {
  mongoose
    .connect(mongoUrl)
    .then(() => {
      /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    })
    .catch((err) => {
      console.log(
        `MongoDB connection error. Please make sure MongoDB is running. ${err}`
      );
      // process.exit();
    });
} else if (ENVIRONMENT === 'test') {
  // Connect to mongo memory server for testing
  const mongoServer = new MongoMemoryServer(); // in-memory server

  try {
    const mongoUri: string = mongoServer.getUri();
    mongoose
      .connect(mongoUri)
      .then(() => {
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
      })
      .catch((err) => {
        console.log(
          `Mock MongoDB connection error. Please make sure MongoDB is running. ${err}`
        );
        // process.exit();
      });
  } catch (err) {
    console.log(err);
  }
}

app.get('/status', (req: Request, res: Response) => {
  res.send('Service is running!');
});

app.set('port', PORT);

app.use(express.json());
app.use(cors());

app.use(defaultRouter);
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    store: MongoStore.create({
      mongoUrl,
    }),
  })
);
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
   res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
      next();
});

app.listen(3000, IPV4_ADD, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
