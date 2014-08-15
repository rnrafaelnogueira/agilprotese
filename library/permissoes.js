exports.acl = function(){
	var acl = require('acl');
    acl = new acl(new acl.memoryBackend());
	return acl;
}
