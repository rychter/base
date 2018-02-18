postMessage("mining started.");

var dataRecived;
var objRecived;


onmessage = function (e) {
    // the passed-in data is available via e.data
    dataRecived = e.data;
    postMessage("data received");
    postMessage(dataRecived);

    objRecived = JSON.parse(e.data);

};


while (!isValidHashDifficulty(nextHash, difficulty)) {
    now = getTimestamp();
    if ((now - t) > max_time_s) {
        //ran out of time
        return null;
    }
    nonce = nonce + 1;
    nextHash = calculateHash(nextIndex, previousBlock.hash, nextTimestamp, nonce, transactions_and_coinbase, difficulty[0], difficulty[1]);
}


var isValidHashDifficulty = (hash, difficulty) =
>
{
    //difficulty is a 2-element array (a and b)
    if (hash == '') {
        return false;
    }
    if (hash.indexOf(Array(difficulty[0] + 1).join('0')) != 0) {
        return false;
    }
    //check first digit
    var digit_hex = hash.charAt(difficulty[0]);
    var digit_dec = parseInt(digit_hex, 16);
    if (isNaN(digit_dec)) {
        digit_dec = 15;
    }
    if (digit_dec > difficulty[1]) {
        return false;
    }
    return true;
}