module.exports = function(app) {

  const Food = require('../models/food.js');

  findFood = function(req, res) {
    Food.find(function(err, foods) {
      if(!err) {
        console.log('GET /foods'+foods);
        res.send(foods);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  }

  findById = function(req, res) {
  	Food.findById(req.params.id, function(err, food) {
  		if(!err) {
        console.log('GET /food/' + req.params.id);
  			res.send(food);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  }

  addFood = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var food = new Food({
        name        : req.body.name,
        description : req.body.description,
        price       : req.body.price,
        imgURL      : req.body.imgURL
    });

    food.save(function(err) {
      if(!err) {
        console.log('Created');
      } else {
        console.log('ERROR: ' + err);
      }
    });

    res.send(food);
  }

  //DELETE - Delete a TVShow with specified ID
  deleteFood = function(req, res) {
    Food.findById(req.params.id, function(err, food) {
      food.remove(function(err) {
        if(!err) {
          console.log('Removed');
        } else {
          console.log('ERROR: ' + err);
        }
      })
    });
  }



  //Link routes and functions
  app.get('/api/foods', findFood);
  app.post('/api/newfood', addFood);
  app.delete('/api/delfood/:id', deleteFood);
  app.get('/ver/:id', findById);

}