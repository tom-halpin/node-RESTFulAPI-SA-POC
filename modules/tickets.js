/** 
 * file system module reference
 */
var fs = require('fs');
/**
 * Contacts mock test class
 * 
 * @class contacts
 */
class contacts{

/**
 * read mock data file contents
 * 
 * @static
 * @returns 
 * @memberof contacts
 */
static read_json_file()
{
	var file = './data/contacts.json';	
	return fs.readFileSync(file);
}

/**
 * Read the contents of the mock file and parse the data with JSON.parse() to convert it a JavaScript object
 * 
 * @static
 * @returns 
 * @memberof contacts
 */
static list()
{	
	return JSON.parse(contacts.read_json_file());	
};

/**
 * query the mock file by primary contact number
 * 
 * @static
 * @param {any} primarynumber 
 * @returns 
 * @memberof contacts
 */
static query(primarynumber)
{	
	var json = contacts.read_json_file();
	var json_result = JSON.parse(json);
	var result = json_result.result;
	var ret = null;
	for (var i = 0; i < result.length; i++)
	{
		var contact = result[i];
		/* istanbul ignore else */
		if (contact.primarycontactnumber === primarynumber)
		{
			ret =  contact;
			break;
		}
	}
	return ret;
};

/**
 * query the mock file by the specified arg and value
 * 
 * @static
 * @param {any} arg 
 * @param {any} value 
 * @returns 
 * @memberof contacts
 */
static query_by_arg(arg, value)
{
	var json = contacts.read_json_file();
	var json_result = JSON.parse(json);
	var result = json_result.result;
	var ret = null;
	
	for (var i = 0; i < result.length; i++)
	{
		var contact = result[i];
		/* istanbul ignore else */
		if (contact[arg] === value)
		{
			ret = contact;
			break;
		}
	}
	return ret;
};	

/**
 * query the mock file and return the defined groups
 * 
 * @static
 * @returns 
 * @memberof contacts
 */
static list_groups()
{
	var json = contacts.read_json_file();
	var json_result = JSON.parse(json);
	var result = json_result.result;
	
	var resultArray = [];
	
	for (var i = 0; i < result.length; i++)
	{
		var groups = result[i].groups;
		for (var index = 0; index < groups.length; index++)
		{
			if (resultArray.indexOf(groups[index]) ===-1)
			{
				resultArray.push(groups[index]);
			}
		}
	}
	return resultArray;
};

/**
 * query the mock file groups by group name
 * 
 * @static
 * @param {any} group_name 
 * @returns 
 * @memberof contacts
 */
static get_members(group_name)
{
	var json = contacts.read_json_file();
	var json_result = JSON.parse(json);
	var result = json_result.result;
	
	var resultArray = [];
	
	for (var i = 0; i < result.length; i++)
	{	
		if (result[i].groups.indexOf(group_name) > -1)
		{
			resultArray.push(result[i]);
		}
	}
	return resultArray;
};
}

module.exports = contacts;