/**
 * API router
 */
var contacts = require('./modules/contacts');
var http = require('http');
var url = require('url');
var express = require('express');
var router = express.Router();

router.get('/v1/contacts', 
		function(request, response){
			var get_params = url.parse(request.url, true).query;	
			
			if (Object.keys(get_params).length === 0)
			{
				response.setHeader('content-type', 'application/json');
				//response.end(JSON.stringify(contacts.list()));
        response.json({
          results: contacts.list()
        });        	
			}
			else
			{
				response.setHeader('content-type', 'application/json');
				//response.end(JSON.stringify(contacts.query_by_arg(get_params.arg, get_params.value)));
        response.json({
          results: contacts.query_by_arg(get_params.arg, get_params.value)
        });          
			}
		}
);


router.get('/v1/contacts/:number', function(request, response) {
	response.setHeader('content-type', 'application/json');	
	//response.end(JSON.stringify(contacts.query(request.params.number)));
  response.json({
    results: contacts.query(request.params.number)
  }); 
});

router.get('/v1/groups', function(request, response) {
	console.log ('groups');
	response.setHeader('content-type', 'application/json');	
	//response.end(JSON.stringify(contacts.list_groups()));
  response.json({
    results: contacts.list_groups()
  });
});

router.get('/v1/groups/:name', function(request, response) {
	console.log ('groups');
	response.setHeader('content-type', 'application/json');	
	//response.end(JSON.stringify(contacts.get_members(request.params.name)));
  response.json({
    results: contacts.get_members(request.params.name)
  });   
});

module.exports = router;