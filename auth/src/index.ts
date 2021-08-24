import express from 'express';
import { json } from 'body-parser';
import { currentUserRouter } from './current-user';
import { logoutUserRouter } from './logout';
import { loginUserRouter } from './login';
import { registerUserRouter } from './register';
import { errorHandler } from '../middleware/error-handler';


const app = express();

//Making express use other stuff.
app.use(json());

//Routes
app.use(currentUserRouter);
app.use(logoutUserRouter);
app.use(loginUserRouter);
app.use(registerUserRouter);

//Error handling middleware. 
app.use(errorHandler);


app.listen(3000, () => {
  console.log('Listening on port 3000');
});