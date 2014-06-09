/* jslint node: true */
'use strict';

// add 10 onto an age property
module.exports.do = function( deferred, scope ) {

	var ageInTenYears = scope.requestData.age + 10;

	deferred.resolve( { "ageInTenYears": ageInTenYears } );

	return deferred.promise;

}