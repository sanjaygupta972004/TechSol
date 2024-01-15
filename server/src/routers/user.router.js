
import { Router } from 'express';

import {userAuthRegisterSchema ,userAuthLoginSchema} from "../validate/userAuth.validate.js";


import {
   register,
   login ,
   getUserProfile,
} from '../controllers/user.controller.js';

import {validateUserAuthRegister,validateUserAuthLogin } from '../middleware/auth.middleware.js';
import { jwtVerify } from '../middleware/authJwtVerify.middleware.js';

const router = Router();

router.route('/register').post(validateUserAuthRegister(userAuthRegisterSchema), register);
router.route('/login').post(validateUserAuthLogin(userAuthLoginSchema),login);

// secure route   
 router.route('/user-profile').get(jwtVerify, getUserProfile);


export default router;