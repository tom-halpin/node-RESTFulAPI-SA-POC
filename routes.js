/**
 * API router
 */
var tickets = require('./modules/tickets');
var http = require('http');
var url = require('url');
var express = require('express');
var express = require('express');
var router = express.Router();

router.get('/v1/tickets', 
		function(request, response){
			var get_params = url.parse(request.url, true).query;	
			
			if (Object.keys(get_params).length === 0)
			{
				response.setHeader('content-type', 'application/json');
				//response.end(JSON.stringify(tickets.list()));
        response.json({
          results: tickets.list()
        });        	
			}
			else if(get_params.instance)
			{
				response.setHeader('content-type', 'application/json');
				//response.end(JSON.stringify(tickets.query_by_arg(get_params.arg, get_params.value)));
        response.json({
          results: tickets.query_by_arg("instance", get_params.instance)
        });          
			}
		}
);

module.exports = router;