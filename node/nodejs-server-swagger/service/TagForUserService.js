'use strict';


/**
 * api-summary
 * swagger-example
 *
 * user_name String spec for user_name
 * headerExam String 
 * queryStringExam Integer offset for pagination (optional)
 * user User  (optional)
 * returns user
 **/
exports.userUser_namePOST = function(user_name,headerExam,queryStringExam,user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

