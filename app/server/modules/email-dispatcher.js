
var EM = {};
module.exports = EM;

EM.server = require("emailjs/email").server.connect(
{
	host 	    : process.env.EMAIL_HOST || 'smtp.gmail.com',
	user 	    : process.env.EMAIL_USER || 'systemywspolbiezne1@gmail.com',
	password    : process.env.EMAIL_PASS || '123456aaaaaaa',
	ssl		    : true
});

EM.dispatchResetPasswordLink = function(account, callback)
{
	EM.server.send({
		from         : process.env.EMAIL_FROM || 'Systemy Wspolbiezne<do-not-reply@gmail.com>',
		to           : account.email,
		subject      : 'Password Reset',
		text         : 'something went wrong... :(',
		attachment   : EM.composeEmail(account)
	}, callback );
}

EM.dispatchMessage = function(account, content, callback)
{
	EM.server.send({
		from         : process.env.EMAIL_FROM || 'Systemy Wspolbiezne<do-not-reply@gmail.com>',
		to           : account.email,
		subject      : 'New Message in Concurrent Engineering App',
		text         : content
		//attachment   : EM.composeEmail(account)
	}, callback );
}

EM.composeEmail = function(o)
{
	var link = 'http://localhost:3000/reset-password?e='+o.email+'&p='+o.pass;
	var html = "<html><body>";
		html += "Hi "+o.name+",<br><br>";
		html += "Your username is <b>"+o.user+"</b><br><br>";
		html += "<a href='"+link+"'>Click here to reset your password</a><br><br>";
		html += "Cheers,<br>";
		html += "<a href='http://twitter.com/braitsch'>braitsch</a><br><br>";
		html += "</body></html>";
	return  [{data:html, alternative:true}];
}