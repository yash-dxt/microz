import express from 'express';

const router = express.Router();

router.post('api/user/logout', () => {
    //Add token and refresh token to blacklist in redis. 
});


export { router as logoutUserRouter }