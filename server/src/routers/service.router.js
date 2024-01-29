import {Router} from 'express';

const router = Router();

import { getServices,} from '../controllers/service.controller.js';



router.route('/getServices').get(getServices)


export default router;  