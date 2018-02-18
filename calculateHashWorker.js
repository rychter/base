postMessage("in calculateHashWorker.js");


var CryptoJS = require("crypto-js");


postMessage("CryptoJS");


var dataRecived;
var objRecived;


var nextHash;
var difficulty;
var getTimestamp;
var max_time_s;
var t;
var nonce;
var nextIndex;
var previousBlockHash;
var nextTimestamp;
var transactions_and_coinbase;
var difficulty0;
var difficulty1;
var hash;


/*"nextHash" : nextHash,
    "difficulty" : difficulty,
    "timestamp" : getTimestamp(),
    "max_time_s" : max_time_s,
    "t" : t,
    "nonce" : nonce,
    "nextIndex" : nextIndex,
    "previousBlockHash" : previousBlock.hash,
    "nextTimestamp" : nextTimestamp,
    "transactions_and_coinbase" : transactions_and_coinbase,
    "difficulty0" : difficulty[0],
    "difficulty1" : difficulty[1]*/


onmessage = function (e) {

    dataRecived = e.data;
    postMessage("data received");


    objRecived = JSON.parse(e.data);

    nextHash = objRecived["nextHash"];
    difficulty = objRecived["difficulty"];

    getTimestamp = objRecived["getTimestamp"];
    max_time_s = objRecived["max_time_s"];
    t = objRecived["t"];
    nonce = objRecived["nonce"];
    nextIndex = objRecived["nextIndex"];
    previousBlockHash = objRecived["previousBlockHash"];
    nextTimestamp = objRecived["nextTimestamp"];
    transactions_and_coinbase = objRecived["transactions_and_coinbase"];
    difficulty0 = objRecived["difficulty0"];
    difficulty1 = objRecived["difficulty1"];

    hash = nextHash;

    postMessage(" difficulty" + difficulty);
    postMessage("message recived " + e.data);


    startMining();



};


startMining = function () {

    postMessage("Before while loop");

    /*   while (!isValidHashDifficulty(nextHash, difficulty)) {*/


    /*    var now = getTimestamp();
        if ((now - t) > max_time_s) {
            //ran out of time
            return null;
        }*/
    nonce = nonce + 1;
    postMessage("SUCCESS : " + calculateHash(nextIndex, previousBlockHash, nextTimestamp, nonce, transactions_and_coinbase, difficulty0, difficulty1));

    /* nextHash = calculateHash(nextIndex, previousBlockHash, nextTimestamp, nonce, transactions_and_coinbase, difficulty0, difficulty1)*/
}

calculateHash = function (index, previousHash, timestamp, nonce, data, difficulty_a, difficulty_b) {


    return CryptoJS.SHA256(index + previousHash + timestamp + nonce + data + difficulty_a + difficulty_b).toString();


};


/*
var isValidHashDifficulty = (hash, difficulty) =>
{
    //difficulty is a 2-element array (a and b)
    if (hash == '') {
        return false;
    }
    if (hash.indexOf(Array(difficulty[0] + 1).join('0')) != 0) {
        return false;
    }
    //check first digit
    var digit_hex = hash.charAt(difficulty0);
    var digit_dec = parseInt(digit_hex, 16);
    if (isNaN(digit_dec)) {
        digit_dec = 15;
    }
    if (digit_dec > difficulty1) {
        return false;
    }
    return true;
}*!/
*/
