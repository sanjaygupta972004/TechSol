import {Router} from 'express';

const router = Router();

import {createService, getServices,} from '../controllers/service.controller.js';



router.route('/createService').post(createService)
router.route('/getServices').get(getServices)


export default router;  