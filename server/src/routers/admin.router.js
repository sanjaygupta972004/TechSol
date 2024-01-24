import {Router} from 'express';

const router = Router();

import {jwtVerify} from '../middleware/authJwtVerify.middleware.js';

router.use(jwtVerify);

import {
   getUsers,
   getContacts,
} from '../controllers/admin.controller.js';

router.route('/users').get(getUsers);
router.route('/contacts').get(getContacts);

export default router;