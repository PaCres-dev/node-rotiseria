module.exports = function(app) {

  const Order = require('../models/orders.js');

  createOrder = function(req, res) {

    let id = req.session.user;

    var order = new Order({
      userId      : id,
      pedido      : req.body.pedido,
      precioFinal : req.body.precioFinal,
      datosPago   : req.body.datosPago,
    });

    order.save(function(err) {
      if(!err) {
        console.log('Created');
        return res.json({success: true});
      } else {
        console.log('ERROR: ' + err);
      }
    });
  }

  showOrder = function(req, res) {

    var userId = req.session.user;

  	Order.findOne({userId : userId}, function(err, order) {
  		if(!err) {
        console.log('GET /food/' + userId);
  			res.send(order);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  }

  showOrders = function(req, res) {
  	Order.find(function(err, orders) {
  		if(!err) {
        console.log('GET /orders/'+ orders);
  			res.send(orders);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  }

  //Link routes and functions
  app.post('/api/neworder', createOrder);
  app.get('/api/order', showOrder);
  app.get('/api/orders', showOrders);

}