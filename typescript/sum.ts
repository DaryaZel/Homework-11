function sum(a:number) {
    return function f(b:number) {
        if (b === undefined) {
            return a;
        }
        else {
            a += b;
            return f;
        }
    };
}
export= sum
