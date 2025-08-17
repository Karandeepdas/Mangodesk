import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import emailRouter from './Routes/emailsender.js';
import summariseRouter from './Routes/summarise.js';

const app = express();
app.use(cors());
app.use(express.json({ limit: '2mb' }));

app.use('/summarise', summariseRouter);
app.use('/send', emailRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
