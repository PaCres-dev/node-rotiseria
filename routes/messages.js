
module.exports = function(app) {

  var nodemailer = require("nodemailer");

  sendMessage = function(req, res) {
    console.log('Esto es lo que viene del body => ' + req.body);

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'm7zhqyvqkvw24rzr@ethereal.email',
        pass: 'pass'
      }
    });

    let mailOptions = {
      from: req.body.nombre+" "+req.body.apellido+" <"+req.body.email+">", // sender address
      to: '<testing@gmail.com>', // list of receivers
      subject: req.body.asunto, // Subject line
      text: req.body.mensaje, // plain text body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);

      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
  }
  //Link routes and functions
  app.post('/api/contact', sendMessage);

}