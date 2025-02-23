import express from 'express';
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

app.get('/sneha', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello penguin!`);
});

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});