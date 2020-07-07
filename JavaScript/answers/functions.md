# Functions
3. Function min(a, b)
``` JavaScript
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(x, y) {
    if (y < x) {
        return y;
    }
    return x;
}
```

4. Function pow(x,n)
``` JavaScript
// pow(3, 0) = 1
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

function pow(x, y) {
    if (y == 0) {
        return 1;
    }

    var sum = x; // sum = 3
    for(var i = 1; i < y; i ++) {
        sum = sum * x;
    }
    return sum;
}
```