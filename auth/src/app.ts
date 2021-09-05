import express from 'express';
import 'express-async-errors'; // Handles the need of throw keyword with next() in async functions.

import { json } from 'body-parser';
import { currentUserRouter } from './routes/current-user';
import { logoutUserRouter } from './routes/logout';
import { loginUserRouter } from './routes/login';
import { registerUserRouter } from './routes/register';
import { errorHandler } from './middleware/error-handler';
import { BadRequestError } from './errors/extensions/bad-request-error';

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


app.use(errorHandler);

export { app };
