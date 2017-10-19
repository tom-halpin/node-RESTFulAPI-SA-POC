/** 
 * file system module reference
 */
var fs = require('fs');
/**
 * tickets mock test class
 * 
 * @class tickets
 */
class tickets{
	/**
	 * read mock data file contents
	 * 
	 * @static
	 * @returns 
	 * @memberof tickets
	 */
	static read_json_file()
	{
		var file = './data/tickets.json';	
		return fs.readFileSync(file);
	}

	/**
	 * Read the contents of the mock file and parse the data with JSON.parse() to convert it a JavaScript object
	 * 
	 * @static
	 * @returns 
	 * @memberof tickets
	 */
	static list()
	{	
		return JSON.parse(tickets.read_json_file());	
	};

	/**
	 * query the mock file by the specified arg and value
	 * 
	 * @static
	 * @param {any} arg 
	 * @param {any} value 
	 * @returns 
	 * @memberof tickets
	 */
	static query_by_arg(arg, value)
	{
		var json = tickets.read_json_file();
		var json_result = JSON.parse(json);
		var result = json_result.result;
		var ret = null;
		
		for (var i = 0; i < result.length; i++)
		{
			var ticket = result[i];
			/* istanbul ignore else */
			if (ticket[arg] === value)
			{
				ret = ticket;
				break;
			}
		}
		return ret;
	};	

}

module.exports = tickets;