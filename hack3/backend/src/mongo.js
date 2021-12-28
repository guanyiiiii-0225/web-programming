import mongoose from "mongoose";
import { dataInit } from "./upload.js";

import "dotenv-defaults/config.js";
const Tasks = require('./models/task')

async function connect() {
  // TODO 1.1 Connect your MongoDB
  if (!process.env.MONGO_URL) {
    console.error('Missing MONGO_URL!!!')
    process.exit(1)
  }

  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const db = mongoose.connection

  db.on('error', (error) => {
    console.error(error)
  })
  
  db.once('open', () => {
    console.log('MongoDB connected!');
    dataInit();
  })
}

export default { connect };