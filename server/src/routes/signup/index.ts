import express from 'express';
import * as signupController from '../../controllers/signupController';


const router = express.Router();
/*
* Code routes here for signup
*/

router.post('/', signupController.postUserSignUp);

export default router;