/* jslint node: true */
'use strict';

// concatenate and return a firstname and a surname
module.exports.do = function( deferred, scope ) {

	var fullname = scope.requestData.firstname + ' ' + scope.requestData.surname;

	deferred.resolve( { "fullname": fullname } );

	return deferred.promise;

}