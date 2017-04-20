'use strict';
const fs = require('fs');
const path = require('path');

module.exports = {
	BoxSDKConfig: {
		boxClientId: "h6wlt9t9vypf35oo1by773m5yt9bwyb0",
		boxClientSecret: "nESzT3B5QvIbhbrlXqWqE6R6U5XNN13A",
		boxEnterpriseId: "1020713",
		boxPrivateKeyFileName: "private_key.pem",
		boxPrivateKeyPassword: "passphrase",
		boxPrivateKey: (boxPrivateKeyFileName) => {
			return fs.readFileSync(path.resolve(boxPrivateKeyFileName));
		},
		boxPublicKeyId: "cqktf7ir",
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
		domain: "demoeng.auth0.com",
		clientId: "VRpu22ndm0E2xVT9YHNDn0z0BBbPsuyb",
		clientSecret: "nmzvZvcx0I5Fe4Ax2ASp7zG4c2igWf31_MotX_I7CtBct6yR0xxSD9RDNeHMXMfH",
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
