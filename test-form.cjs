const https = require('https');
const querystring = require('querystring');

const postData = querystring.stringify({
  'form-name': 'contact',
  'name': 'Test User',
  'email': 'test@example.com',
  'message': 'This is a test message to verify the form submission works.'
});

const options = {
  hostname: 'harmann-gill.netlify.app',
  port: 443,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  let body = '';
  res.on('data', (chunk) => {
    body += chunk;
  });
  res.on('end', () => {
    console.log('Response body:', body.substring(0, 200));
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.write(postData);
req.end();
