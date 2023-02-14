import express from 'express';
import * as testController from '../../controllers/testController';

const router = express.Router();
/*
* Code routes here for analytics
*/
router.get('/test-completion', testController.getTests);

export default router;