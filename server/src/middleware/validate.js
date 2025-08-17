import { inputPromptSchema, senderSchema } from './validations.js';

export function userValidate(req, res, next) {
  const userdata = {
    usertext: req.body?.data,
    userprompt: req.body?.prompt
  };
  const result = inputPromptSchema.safeParse(userdata);
  if (!result.success) {
    return res.status(400).json({ message: 'Invalid input', issues: result.error.issues });
  }
  return next();
}

export function senderValidate(req, res, next) {
  const senderdata = {
    useremails: req.body?.emails,
    sendertitle: req.body?.title,
    sendertext: req.body?.description
  };
  const result = senderSchema.safeParse(senderdata);
  if (!result.success) {
    return res.status(400).json({ message: 'Invalid input', issues: result.error.issues });
  }
  return next();
}