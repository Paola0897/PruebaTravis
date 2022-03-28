const express = require('express');
const app = express();
const path = require('path');

//  SETTINGS
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');
app.set('css', path.join(__dirname, 'css'))
app.set('fonts', path.join(__dirname, 'fonts'))
app.set('img', path.join(__dirname, 'img'))
app.set('js', path.join(__dirname, 'js'))
app.set('res', path.join(__dirname, 'res'))
app.set('spec', path.join(__dirname, 'spec'))



//  MIDDLEWARES


// ROUTES
app.get('/', (req, res) =>{
    //res.sendFile();
    res.render('index.html');
});

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// LISTENING SERVER
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});


app.listen(3000, () => {
    console.log('Server on port',3000);
});
