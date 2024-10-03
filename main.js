const express = require('express')
const app = express()
const port = 3000

// You have to link all the folders in which your page contents are present. 
// like example Public folder for images and docs to access 
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/public', express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/src'));

//set paths for pages like app.get('/path', (request, response) = > { response.sendFile('your file name'), {root: __dirname } });
app.get('/', (req, res) => {
    res.sendFile('/src/home.html', { root: __dirname });
});

app.get('/home', (req, res) => {
    res.sendFile('/src/home.html', { root: __dirname });
});

app.get('/bookroom', (req, res) => {
    res.sendFile('/src/BookRoom.html', { root: __dirname });
});

app.get('/Thanks', (req, res) => {
    res.sendFile('/src/Thanks.html', { root: __dirname });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})