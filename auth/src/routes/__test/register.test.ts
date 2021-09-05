import request from 'supertest';
import { app } from '../../app';

it('Status Code: 200 on register', async () => {
    return request(app).post('/api/user/register').query({
        role: 'owner'
    }).send({
        email: 'test@test.com',
        password: 'password'
    }).expect(201);
});
