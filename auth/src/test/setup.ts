import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app';

let mongo: MongoMemoryServer;
beforeAll(async () => {
    process.env.TOKEN_KEY = 'test'
    mongo = await MongoMemoryServer.create();
    const mongUrl = await mongo.getUri();

    await mongoose.connect(mongUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

beforeEach(async () => {
    const collection = await mongoose.connection.db.collections();
    await collection.forEach(async element => {
        await element.deleteMany({});
    });
});

afterAll(async () => {
    await mongo.stop();
    await mongoose.connection.close();
})