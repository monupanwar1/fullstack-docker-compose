import cors from 'cors';
import express from 'express';
import router from './routes/userRoutes';

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/user', router);

app.get('/api/health', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Health is good!', body: req.body });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
