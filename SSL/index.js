const FS=require('fs');
const Path=require('path');
var SSL={};
SSL.key=FS.readFileSync(Path.join(__dirname,'key.pem'));
SSL.cert=FS.readFileSync(Path.join(__dirname,'cert.pem'));
module.exports=SSL;