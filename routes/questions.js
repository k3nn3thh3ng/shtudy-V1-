const express       = require("express"),
	  router        = express.Router(),
	  Questions     = require("../models/question");
	  
//future phase 1.2 development
	  // Comments      = require("../models/comment"),
	  // middlewareObj = require("../middleware/index");


//routes(Questions)
router.get('/', function(req,res){
	res.render('home');
});

// router.get('/new', function(req,res){
// 	res.render('questions/new');
// });

// router.post('', middlewareObj.checkLogin, function(req,res){
// 	Questions.create(
// 		req.body.question
// 	, function (err, question){
// 		if(err){
// 			console.log(err)
// 			res.redirect('/questions/new')
// 		} else {
// 			question.author.id = req.user._id;
// 			question.author.username =req.user.username;
// 			question.save();
//             res.redirect('/questions');
// 		}
// 	})
// })

// router.get('/:id', middlewareObj.checkLogin, function(req, res){
// 	Questions.findById(req.params.id).populate("comments").exec(function(err, foundQuestion){
// 		if(err){
// 			console.log(err)
// 		} else {
// 			res.render('questions/show', {questions: foundQuestion})
// 		}
// 	})
// });

	
// router.get('/:id/edit', middlewareObj.checkQuestionsOwnership, function(req, res){
// 	Questions.findById((req.params.id), function(err, question){
// 		if(err){
// 			console.log(err)
// 		} else {
// 			res.render('questions/edit', {questions:question})
// 		}
// 	})
// })

// router.put('/:id', middlewareObj.checkQuestionsOwnership, function(req, res){
// 	Questions.findOneAndUpdate((req.params.id), req.body.question, function(err, question){
// 		if(err){
// 			console.log(err)
// 		} else {
// 			console.log(question);
// 			res.redirect('/questions/' + req.params.id);
// 		}
// 	})
// })

// router.delete('/:id', middlewareObj.checkQuestionsOwnership, function(req, res){
// 	Questions.findOneAndDelete((req.params.id), function(err, question){
// 		if(err){
// 			console.log(err)
// 		} else {
// 			res.redirect('/questions')
// 		}
// 	})
// })




module.exports = router;