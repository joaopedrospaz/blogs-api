const express = require('express');
const blogPostRouter = require('./routes/blogsPostRouter');
const categoryRouter = require('./routes/categoryRouter');
const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRoter');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', blogPostRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
