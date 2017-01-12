onmessage = function (event) {
    var array = najdi_prvocisla(event.data.num, event.data.max);
    postMessage({messageType: "vypis", data: array});
};

function najdi_prvocisla(num, max) {
    // Algoritmus z http://www.programiz.com/c-programming/examples/prime-interval-function
    var lastState;
    var array = [];
    var flag;
    num++;
    while (num < max) {
        flag = 0;
        for (i = 2; i <= num / 2; ++i) {
            if (num % i === 0) {
                flag = 1;
                break;
            }
        }
        var actualState = Math.round((num - 1) / max * 100);
        if (actualState != lastState) {
            postMessage({messageType: "progress", data: actualState});
            lastState = actualState;
        }

        if (flag === 0) {
            array.push(" " + num);
        }
        ++num;
    }
    return array;
}