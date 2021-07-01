const arr = [
    615, 692, 192, 52, 151,
    251, 413, 283, 360, 534,
    89, 728, 35, 166, 462,
    556
];

/*============= #1 =============*/

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

/*============= #2 =============*/

arr.slice().reverse()
    .forEach(function(item) {
            console.log(item);
        });

/*============= #3 =============*/

arr.slice().sort((a, b) => b - a)
    .forEach(function(obj) {
            console.log(obj);
        });
