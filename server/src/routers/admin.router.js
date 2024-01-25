import {Router} from 'express';

const router = Router();

import {jwtVerify} from '../middleware/authJwtVerify.middleware.js';

router.use(jwtVerify);

import {
   getUsers,
   getUser,
   getContacts,
   deleteUser,
   deleteContact,
   updateUser
} from '../controllers/admin.controller.js';

router.route('/users').get(getUsers);
router.route('/contacts').get(getContacts);
router.route('/user/:_id').get(getUser);
router.route('/c/:_id').delete(deleteUser).patch(updateUser);
router.route('/contact/:_id').delete(deleteContact);

export default router;