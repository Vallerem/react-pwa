const express = require('express');
const app = express();
const port = process.env.PORT || 7000;

app.get('/api/hello', (req, res) => {
  res.send({ Hello: 'World' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));