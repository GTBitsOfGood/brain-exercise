import express from 'express';
import * as loginController from '../../controllers/loginController';

const router = express.Router();
/*
* Code routes here for login
*/
router.post('/:accesstoken', loginController.postLoginUser);

export default router;