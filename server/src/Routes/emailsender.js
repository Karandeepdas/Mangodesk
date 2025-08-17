import express from 'express';
import mailSender from '../provider/mail.js';
import { senderValidate } from '../middleware/validate.js';

const router = express.Router();

router.post('/', senderValidate, mailSender);

export default router;