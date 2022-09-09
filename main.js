var QRCode = require('qrcode')
var express = require(`express`)
var app = express()
const ejs = require(`ejs`)
const path = require(`path`)
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get("/", async (req, res) => {
    return res.render('index.ejs')
})

app.post("/", async (req, res) => {
    var data = await req.body.data;
    QRCode.toDataURL(`${data}`, function (err, url) {
    res.send(url)
  })
})


 app.listen(3000) 