import express from 'express';

const app = express();
const PORT = 3000;
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Hello from Express and TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
