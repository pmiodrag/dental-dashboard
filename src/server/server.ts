
import express = require('express');
import path = require('path');
import bodyParser = require('body-parser');
import * as patients from "./api/patient/controller";
import * as treatments from "./api/treatment/controller";
var port: number = process.env.PORT || 3000;
var app = express();
//var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});
app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/styles', express.static(path.resolve(__dirname, 'styles')));
app.use('/fonts', express.static(path.resolve(__dirname, 'assets/fonts')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));   
var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});

app.get('/patients', patients.index);
app.post('/patient', patients.create);
app.put('/patient/:id', patients.update);
app.get('/patient/:id', patients.show);
app.delete('/patient/:id', patients.destroy);
app.get('/selectTreatments', treatments.selectTreatments);



var renderIndex = (req: express.Request, res: express.Response) => {
    console.log("renderIndex __dirname", __dirname)
    res.sendFile(path.resolve(__dirname, 'index.html'));
}
app.get('/*', renderIndex);

//connection.end();
