import express from 'express';
import sendPromptToGemini from '../provider/Aisummary.js';
import { userValidate } from '../middleware/validate.js';

const router = express.Router();
router.post('/', userValidate, sendPromptToGemini);

export default router;
