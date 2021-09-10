
import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {

  if (!process.env.TOKEN_KEY) {
    throw new Error('JWT key is not defined.');
  }
  if (!process.env.REFRESH_TOKEN_KEY) {
    throw new Error('Refresh token key is not defined.');
  }

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

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

start();
