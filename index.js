import express from 'express';

import quotesRoutes from './routes/quotes.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/quotes', quotesRoutes);

app.get('/', (req, res) => res.send('Hello from homepage.'));

function notFound(req, res, next) {
  res.status(404);
  const error = new Error('Not Found - ' + req.originalUrl);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack,
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Listening on port', port);
});
