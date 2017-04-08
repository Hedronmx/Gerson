function jstest(){
  var text = document.getElementById('textarea').value;
  var textEncrypted = CryptoJS.AES.encrypt(text, "passPhrase");
  var textDecrypted = CryptoJS.AES.decrypt(textEncrypted, "passPhrase");
  originalData = textDecrypted.toString(CryptoJS.enc.Utf8);
}
