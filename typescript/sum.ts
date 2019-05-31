function sum(a:number) {
    let count:number =a;
    return function f(b:number) {
        if (b === undefined) {
           return count;
        }
        else {
            count += b;
            return f;
        }
    };
}
export= sum
