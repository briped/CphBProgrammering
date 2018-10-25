/**
 * Created by Christian on 06-02-2018.
 */
let i, fib, fibPrev, fibNext;
fibPrev = 0;
fib = 1;
i = 1;
while (i <= 10) {
    document.write(`Fibonacci #${i}: ${fibPrev}<br />`);

    fibNext = fibPrev + fib;
    fibPrev = fib;
    fib = fibNext;
    i++;
}
