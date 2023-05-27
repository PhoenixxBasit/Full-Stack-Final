const mongoose = require('mongoose');
const {log} = require("mercedlogger") 

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection
    .on('open', () => log.green('Database Connected',"Successful"))
    .on('error', (error) => log.red(error))
    .on('close', () => console.log('Database Closed'));

module.exports = mongoose;
