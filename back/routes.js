const bodyparser = require('body-parser');
const car = require('./router/Cars');
const marca = require('./router/Marca');

module.exports =(app) => {
    app.use(
        bodyParser.json(),
        car,
        marca
    )
}