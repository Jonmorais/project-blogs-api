require('dotenv').config();

const express = require('express');
const userRouter = require('./src/routes/userRouter');
const loginRouter = require('./src/routes/loginRouter');
const categoryRouter = require('./src/routes/categoryRouter');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoryRouter);

app.listen(PORT, () => console.log(`Aplicação ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
