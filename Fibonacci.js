function fibonaci(){
    var n = 10;
    var termo1 = 0;
    var termo2 = 1;
    var termo3;
    for (i=3; i<=n; i++){
        termo3 = termo1 + termo2;
        termo1 = termo2;
        termo2 = termo3;
    }
}

module.exports = fibonaci