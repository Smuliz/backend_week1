const express = require('express');
const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (reg, res) => {
  res.render('index');
})
app.get('/catinfo', (req, res) => {
    const cat = {
      name: 'Frank',
      age: 6,
      weight: 5,
    };
    res.json(cat);
  });
// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))