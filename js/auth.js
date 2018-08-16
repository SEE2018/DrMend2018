var uri = "https://authservice.priaid.ch/login";
var secret_key = "mysecretkey";
var computedHash = CryptoJS.HmacMD5(uri, secret_key);
var computedHashString = computedHash.toString(CryptoJS.enc.Base64);

var url = 'https://authservice.priaid.ch/login';
var login_request = new XMLHttpRequest();
login_request.open('POST', url, async);
login_request.setRequestHeader('Authorization', 'Bearer ' + computedHashString);
login_request.send();

console.log(login_request.responseText);
