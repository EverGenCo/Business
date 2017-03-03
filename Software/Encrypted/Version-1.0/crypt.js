var CRYPT = {
 "Encrypt": function(string){encryptString(string);},
 "Decrypt": function(string){decryptString(string);}
};
function encryptString(string){
 var data = "";
 for(var i = 0;i<string.length;i++){
  data += String.charCodeAt(string[i]);
 }
 return data;
}
function decryptString(string){
 var data = "";
 for(var i = 0;i<string.length;i++){
  data += String.fromCharCode(string[i]);
 }
 return data;
}
