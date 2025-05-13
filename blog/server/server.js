import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { router as postsRoutes } from './routes/posts.js';

dotenv.config();

const app = express();
const port = 5000;

app.use(cors())
// origin: 'url...'
// methods: get, post, put, delete
// allowedHeaders: content-type

app.use(express.json());

app.use('/api/posts', postsRoutes);

app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
});
