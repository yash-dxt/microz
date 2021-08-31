
import express from 'express';
import 'express-async-errors'; // Handles the need of throw keyword with next() in async functions.

import { json } from 'body-parser';
import { currentUserRouter } from './routes/current-user';
import { logoutUserRouter } from './routes/logout';
import { loginUserRouter } from './routes/login';
import { registerUserRouter } from './routes/register';
import { errorHandler } from './middleware/error-handler';
import mongoose from 'mongoose';
import { BadRequestError } from './errors/extensions/bad-request-error';
import { NotFoundError } from './errors/extensions/not-found-error';

const app = express();

//Making express use other stuff.
app.use(json());

//Routes
app.use(currentUserRouter);
app.use(logoutUserRouter);
app.use(loginUserRouter);
app.use(registerUserRouter);

//Error handling middleware. 

app.all('*', () => {
  throw new BadRequestError('Route does not exist! Please check the route!');
});

const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log("Mongo db is running")
  } catch (e) {
    console.log(e);
  }
}

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

start();
