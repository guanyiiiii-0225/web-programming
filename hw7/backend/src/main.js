import express from 'express';
import dotenv from "dotenv-defaults";
import cardRoute from './routes/index';
import cors from 'cors'
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// init middleware
app.use(cors())

// define routes
app.use('/api', cardRoute)

const port = process.env.PORT || 5000
app.listen(port, () =>
  console.log(`listening on port ${port}!`),
);

