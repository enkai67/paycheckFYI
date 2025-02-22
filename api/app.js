
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import rolesRouter from './routes/roles.js';
import companyRouter from './routes/companies.js';
import salaryRouter from './routes/salaries.js';
import authRouter from './routes/auth.js';
import { jobRouter } from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is connected successfully!' });
});

app.use('/api/roles', rolesRouter);
app.use('/api/companies', companyRouter);
app.use('/api/salaries', salaryRouter);
app.use('/api/auth', authRouter);
app.use('/api/jobs', jobRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
