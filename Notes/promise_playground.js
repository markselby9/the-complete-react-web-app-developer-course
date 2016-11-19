//challenge about ES6 promise
function isNumber(x){
    return (x!==undefined) && (typeof x==='number');
}

var addPromise = function(a, b){
    return new Promise(
        function(resolve, reject){
            if (isNumber(a) && isNumber(b)){
                resolve(a+b);
            }else{
                reject('not a number');
            }
        }
    );
};

addPromise('a',3).then(function(x){
    console.log('success:', x);
}, function(e){
    console.log('error:', e)
});