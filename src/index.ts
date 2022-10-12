import express from 'express';
import swaggerUi from 'swagger-ui-express';

import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerUi));
app.get('/', (request, response) => {
  return response.status(200).json({
    message: 'Hello World! Init your project nodejs !',
  });
});
app.listen(process.env.PORT || 4000, () => {
  console.log('Localhost port 4000');
});
