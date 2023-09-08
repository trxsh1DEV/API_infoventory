import app from './app';

const port = 3003;

app.listen(port, () => {
  console.log('Server running');
  console.log(`connect http://localhost:${port}`);
});
