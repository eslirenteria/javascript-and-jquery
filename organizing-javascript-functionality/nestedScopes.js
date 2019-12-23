function makeAdder(x){
    // parameter x is an inner variable

    // inner function add uses x. It has a closure over it.
    function add(y){
        return y + x;
    }
    return add;
}