postMessage("this is a message from mine.js file");

var dataRecived;

onmessage = function (e) {
    // the passed-in data is available via e.data
    dataRecived = e.data;
    postMessage("data received");

};


/*
function mine() {

    postMessage("mining in progress.");

    var myObj;
    var dbParam = dataRecived;

    postMessage("mining started in progress..");

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {


    /!*    postMessage("mining started..3");
        postMessage("this.status : " + this.status + " this.readyState" + this.readyState);*!/
        postMessage(this.responseText);
/!*        postMessage("mining started...");
        postMessage("mining started..5");*!/

        setTimeout('mine();', 4000);

    };

    xmlhttp.open("POST", "http://localhost:3001/mineBlock", true);
    xmlhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xmlhttp.send(dbParam);

}*/


/*   ajax({
                 method: "POST",
                 contentType: "application/json; charset=utf-8",
                 url: "http://localhost:3001/mineBlock",
                 data: dataRecived
             })
                 .done(function (msg) {
                   //  $('#mineBlockButton').show();
                    // $('#stopMiningButton').hide();
                     postMessage('recomputing block..');
                     console.log('mined = ' + msg);
                     var obj;
                     try {
                         obj = JSON.parse(msg);
                     }
                     catch (err) {
                         //could not mine block
                         console.log(err.toString());
                         setTimeout('mineBlock();', 2000);

                         postMessage('recomputing block..');

                         return;
                     }
                     //$('#minedlog').text(msg + '\n' + txt);
                     if (obj) {


                         postMessage('mined block ' + obj.index);

                     }

                     getBalance();
                     getTransactions();

                     if (true) {
                         setTimeout('mine();', 2000);
                         postMessage("mining started...");
                     }

                 });*/