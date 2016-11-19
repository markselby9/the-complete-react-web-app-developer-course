/**
 * Created by fengchaoyi on 2016/11/17.
 */

var array = ["aaa", "bbb", "ccc"];

array.forEach((item) => {
    console.log(item)
});

var returnMe = (input) => (input + "...");
console.log(returnMe(123));

var person = {
    name: "name",
    greet: function () {
        array.forEach((item) => {
            console.log(this.name + " - " + item);  // array function doesn't update the 'this' keyword
        })
    }
};
person.greet();

// function add(x, y) {
//     return x+y;
// }

var add = (x,y) => (x+y);

console.log(add(1,2));
console.log(add(3,2));