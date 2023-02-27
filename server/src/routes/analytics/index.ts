import express from 'express';
import * as testController from '../../controllers/testController';
import * as timeController from "../../controllers/timeController";

const router = express.Router();
/*
 * Code routes here for analytics
 */
router.get('/test-completion', testController.getTests);
router.post('/test-completion', testController.postTests);
router.post('/screen-times', timeController.updateTimeEntry);

export default router;
