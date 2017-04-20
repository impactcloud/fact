'use strict';
const fs = require('fs');
const path = require('path');

module.exports = {
	BoxSDKConfig: {
		boxClientId: "ajo2gsloocy4xoqgd7zvwtg3qrwt6er0",
		boxClientSecret: "dcHjeCxs6EG8vwLi6mpcpwKj61AXtQFH",
		boxEnterpriseId: "17493169",
		boxPrivateKeyFileName: "private_key.pem",
		boxPrivateKeyPassword: "passphrase",
		boxPrivateKey: (boxPrivateKeyFileName) => {
			return fs.readFileSync(path.resolve(boxPrivateKeyFileName));
		},
		boxPublicKeyId: "6t5m4c5k",
	},
	BoxOptions: {
		inMemoryStoreSize: "100",
		expiresAtFieldName: "expiresAt",
		boxPersona1AppUserIdFieldName: "box_persona1_id",
		boxPersona2AppUserIdFieldName: "box_persona2_id",
		persona1: "Persona 1",
		persona2: "Persona 2"
	},

	Auth0Config: {
		domain: "impactcloud.auth0.com",
		clientId: "cg73RivuOeMtTWeU1QRBeCPFEbxeKOiM",
		clientSecret: "vspMGctQXvtbUZP8rVChV6vkyfmFFwhGgS4-apmgJX2zmlsikE-MzVDWN24xJuyZ",
		callbackUrl: "https://fact-app.herokuapp.com/callback",
		sessionSecret: "securepassword",
		inMemoryStoreSize: "100"
	},

	RedisConfig: {
		port: "13755",
		address: "redis-13755.c13.us-east-1-3.ec2.cloud.redislabs.com",
		password: "securepassword"
	},

	AppConfig: {
		domain: "https://fact-app.herokuapp.com/"
	}
}
