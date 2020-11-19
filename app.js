const express = require('express');
const app = express();
app.listen(3000);
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
  });
//sending index.html
app.get('/about', (req, res) => {
    res.render('about');
  });
  app.get('/blogs/create', (req, res) => {
    res.render('create');
  });
  // 404 page
  app.use((req, res) => {
    res.status(404).render('404');
  });
app.get('/', (req,res) => {
    // res.send('<p>home page</p>');
    res.sendFile('./views/index.html', { root: __dirname});
})
//sending about.html
app.get('/about', (req,res) => {
    // res.send('<p>About page</p>');
    res.sendFile('./views/about.html', { root: __dirname});
})
//redirect to about page
// app.get('/about-us', (req,res) => {
//     res.redirect('/about');
// })
app.use((req,res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
})
app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});
 
app.use((req, res, next) => {
  console.log('in the next middleware');
  next();
});

app.use(morgan('dev'));

// middleware & static files
app.use(express.static('public'));