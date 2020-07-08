const express        = require('express'),
	  app            = express(),
	  port           = process.env.PORT || 3001,
	  mongoose       = require('mongoose'),
	  bodyParser     = require('body-parser'),
	  methodOverride = require('method-override'),
	  cors           = require('cors');
	  

//database models
const Question   	 = require('./models/question');

//Requiring routes
const questionRoutes = require('./routes/questions');

//mongoose connection configuration
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
//testing database connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('database connection successful')
});

//express configuration
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

//Routes configuration
app.use("", questionRoutes);

//Server Connection
app.listen(port, function(){
	console.log(`app.js server listening at http://localhost:${port}`)
})
