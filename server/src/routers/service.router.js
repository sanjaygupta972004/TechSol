import {Router} from 'express';

const router = Router();

import {createService, getServices,} from '../controllers/service.controller.js';

import {jwtVerify} from '../middleware/authJwtVerify.middleware.js';

router.use(jwtVerify);

router.route('/createService').post(createService)
router.route('/getServices').get(getServices)


export default router;  