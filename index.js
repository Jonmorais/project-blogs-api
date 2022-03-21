require('dotenv').config();

const express = require('express');
const userRouter = require('./src/routes/userRouter');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/user', userRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`Aplicação ouvindo porta ${PORT}!`));
