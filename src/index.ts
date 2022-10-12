import express, { response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (request, response) => {
  return response.status(200).json({
    message: 'Hello World! Init your project nodejs !',
  });
});
app.listen(process.env.PORT || 4000, () => {
  console.log('Localhost port 4000');
});
