import express from 'express';
import { json } from 'body-parser';
import { currentUserRouter } from './current-user';
import { logoutUserRouter } from './logout';
import { loginUserRouter } from './login';
import { registerUserRouter } from './register';


const app = express();

app.use(json());

app.use(currentUserRouter);
app.use(logoutUserRouter);
app.use(loginUserRouter);
app.use(registerUserRouter);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});