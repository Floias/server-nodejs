import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('kekstagram/static'));
app.use(fileUpload());
app.use('/kekstagram', router);

async function startApp() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(process.env.PORT, () => console.log(`SERVER STARTED ON PORT ${process.env.PORT}`));
  } catch (error) {
    console.log(error);
  }
}

startApp();
