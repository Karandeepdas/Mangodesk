import { z } from 'zod';

export const inputPromptSchema = z.object({
  usertext: z.string().min(4, { message: 'there should be atleast 4 character' }),
  userprompt: z.string().min(4, { message: 'there should be atleast 4 character' })
});

export const senderSchema = z.object({
  useremails: z.array(z.string().email({ message: 'invalid email' })).nonempty({ message: 'at least one email required' }),
  sendertitle: z.string().min(1, { message: 'title is required' }),
  sendertext: z.string().min(4, { message: 'there should be atleast 4 character to be sent' })
});