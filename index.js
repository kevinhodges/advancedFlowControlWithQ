/* jslint node: true */
'use strict';

var Q = require( 'q' );

// takes an array of functions and queues them up to run asynchronously
var getAllTheThings = function( functions, scope ) {
	var promises = [];
	functions.map( function( object ) {
		var deferred = Q.defer();
		// if we don't try/catch here, any failures (e.g. module not found or stuff thrown from it) will be handled by Q and returned to the stack
		var functionality = require( './helpers/' + object.package );
		functionality.do( deferred, scope ).then( function( result ) {
			scope[object.key] = result;
		} );
		promises.push( deferred.promise );
	} );
	// wait for all the promises to be fulfilled or rejected before returned
	// Q.all will return immediately if a promise is rejected, not waiting for the rest
	return Q.allSettled( promises );
};

var runAllTheseStagesInSeries = function( requestData, stages, callback ) {
	// create some scope for the entire thread
	var scope = {
		"requestData": requestData
	};
	// create an empty promise to start our series (so we can use 'then')
	var currentPromise = new Q();
	// empty array of promises to pass to Q for scheduling
	var promises = [];
	Object.keys( stages ).forEach( function( key ) {
		currentPromise = currentPromise.then( function() {
			// execute the next function after the previous has resolved successfully
			return getAllTheThings( stages[key], scope );
		} );
		promises.push( currentPromise );
	} );
	// group the results and then call the callback with the .result entry on the scope variable
	Q.allSettled( promises ).then( function() {
		callback( null, scope );
	} );
};

// simulate data being passed to my "app"
var requestData = {
	"firstname": "Bilbo",
	"surname": "Baggins",
	"from": "The Shire",
	"age": 45
}

var myTasks = {
	stage1: [
		{
			"package": "createFullname",
			"key": "fullname"
		}
	],
	stage2: [
		{
			"package": "ageInTenYears",
			"key": "ageInTenYears"
		}
	]
};

runAllTheseStagesInSeries( requestData, myTasks, function( error, result ) {

	console.log( 'result', result );
	
} );