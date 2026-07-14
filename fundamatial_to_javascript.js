function add(a, b, callback) {
    const result = a + b;

    callback(a, b, result);
}

add(10, 23, function (a, b, result) {
    console.log(`${a} + ${b} = ${result}`);
});