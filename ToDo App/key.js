const crypto = require('crypto');

// Generate a 256-bit random secret key
const secretKey = crypto.randomBytes(32).toString('hex');
console.log(secretKey);
