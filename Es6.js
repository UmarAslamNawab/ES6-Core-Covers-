    // 1 Let Examples

    // i)
    // console.log(x)
    // console.log(y)
    //     var x = 3;
    //     let y = 3;
    // console.log(x)
    // console.log(y)



    //2)
    // let c = "sagar";
    // var d = "sagar";
    // console.log(c);
    // console.log(d);


    // 3)
    // console.log(a);
    // let a = "sagar";


    //4
    // if(true){
    //     var a = "sagar" ;
    // }
    //     console.log(a); 

    // if(true){
    // 	let a = "sagar" ;
    // }
    // 	console.log(a); 


    // 5

    // function btn() {
    //     var a = "sagar";
    //     return a
    // }
    // console.log(btn())

    // function btn1() {
    //     let a = "sagar";
    //     return a
    // }
    // console.log(btn1())


    // 6
    // var a = 5;
    // let b = 5;
    // if (a === b) {
    //     function btn() {
    //         return a + b;
    //     }
    // }
    // else {
    //     alert(" a is not equal to b")
    // }

    // console.log(btn());




    // 8

    // console.log(a)
    // var a = 1;
    // function a() { }
    // var a = 10;
    // console.log(a);


    // 9
    // var a = 1;
    // if (true) {
    //     a = function () { };
    //     let a;
    //     var a;
    //     a = 10
    // }
    // console.log(a)




    // 10
    // function a(){
    //     console.log("a");
    // }
    // console.log(a())


    // 11

    // if(true){
    //     function a(){}
    //     a = 10;
    //     console.log(a)
    // }

    // console.log(a)


    // 12

    // var b = 10;
    // if(true){
    //     console.log(b);
    //     c = 20;
    //     function c(){}
    //     c = 12
    // }

    // console.log(c)



    // 2 Const Examples


    // 1

    // const a = `Sagar`;
    // console.log(a)

    // 2

    // a = `Vasu`
    // console.log(a)

    // 3

    // console.log(a)
    // const a = `Sagar`
    // console.log(a)

    // 4

    // const myObj = {
    //     name: "sagar"
    // }
    // console.log(myObj);
    // myObj.name1 = "alafin"
    // console.log(myObj);


    // 5 

    // const myObj = {
    //     name: "sagar"
    // }
    // console.log(myObj);
    // Object.freeze(myObj);
    // myObj.name1 = "alafin"
    // console.log(myObj);


    // 6

    // const myObj = {
    //     name: "sagar"
    // }
    // console.log(myObj);
    // Object.seal(myObj)
    // myObj.name = "alafin"
    // console.log(myObj);



    // 3 ES6 Function types

    // 1
    // let a = () => console.log("sagar")


    // 2
    // let a = () => {
    //     console.log("sagar")
    // }
    // a()

    // 3
    // let getTempItem = (id,name,roll)=> ({ id: id, name: name, roll:roll });
    // console.log(getTempItem(11,"Sagar",105))

    // 4
    // let myFunc = (name, class1) => {
    //     return name + class1
    // }

    // console.log(myFunc("SAGAR", "Metric"))

    // 5
    // let myFunc = (name, roll) => {
    //     return {
    //         name: name,
    //         roll: roll
    //     }
    // }
    // console.log(myFunc("Sagar", 105))

    // 5

    // let person = function (name) {
    //     return {
    //         getName: function () {
    //             return name;
    //         }
    //     };
    // }("Nicholas");
    // console.log(person.getName());




    // 4 ES6 break concept

    // 1
    // let a = `sagar `
    // console.log(a);


    // 2
    // let a = `Vasu  \`sagar\`  `;
    // console.log(a);


    // 3

    // let a = `Vasu  \n\ SAGar `;
    // console.log(a);


    // 5 Default Parameter of functions

    // 1

    //    function names(name1, name2){
    //         console.log(name1 === arguments[0])
    //         console.log(name2 === arguments[1])
    //         name1 = "Sagar"
    //         name2 = "Kamal"

    //         console.log(name1 === arguments[0])
    //         console.log(name2 === arguments[1])
    //     }
    //     names("Ukrani", "Suther")


    // 2


    //    function names(name1, name2){
    //         console.log(name1 === arguments[0])
    //         console.log(name2 === arguments[1])
    //         name1 = "Sagar"
    //         name2 = "Kamal"

    //         console.log(name1 === arguments[0])
    //         console.log(name2 === arguments[1])
    //     }
    //     names("Ukrani")


    // 3

    // function names(name1, name2){
    //         console.log(name1 === arguments[0])
    //         console.log(name2 === arguments[1])
    //         name1 = "Sagar"
    //         name2 = "Kamal"

    //         console.log(name1 === arguments[0])
    //         console.log(name2 === arguments[1])
    //     }
    //     names("Ukrani",undefined)


    // 4

    // function names(name1, name2 = `sagar`){
    //         console.log(name1 === arguments[0])
    //         console.log(name2 === arguments[1])
    //         name1 = "Sagar"
    //         name2 = "Kamal"

    //         console.log(name1 === arguments[0])
    //         console.log(name2 === arguments[1])
    //     }
    //     names("Ukrani")


    // 5

    // function names(name1, name2 = `sagar`){
    //         console.log(name1 === arguments[0])
    //         console.log(name2 === arguments[1])
    //         name1 = "Sagar"
    //         name2 = "Kamal"

    //         console.log(name1 === arguments[0])
    //         console.log(name2 === arguments[1])
    //     }
    //     names("Ukrani",undefined)


    // 6
    // function add(first, second = first) {
    // return first + second;
    // }
    // console.log(add(1, 5));
    // console.log(add(1)); 


    // 7
    // function getValue(value) {
    // return value + 5;
    // }
    // function add(first, second = getValue(first)) {
    // return first + second;
    // }
    // console.log(add(1, 1)); // 2
    // console.log(add(1)); // 7

    // 8
    // function add(first = second, second) {
    // return first + second;
    // }
    // console.log(add(1, 1)); // 2
    // console.log(add(undefined, 1))



    // ES6 Conditions


    // console.log(-0 == +0);
    // console.log(-0 === +0);
    // console.log(Object.is(NaN,NaN))
    // console.log(Object.is(-0,+0))
    // console.log(Object.is(0,0));
    // console.log(NaN === NaN);


    // Objects in ES6

    // 1
    // let name = "name";
    // let myObj = {
    //     ["my" + name] : "Sagar"
    // }
    // console.log(myObj)


    // 2

    // let name = "name";
    // let myObj = {
    //     ["my" + name] : "Sagar",
    //     "my last name" : "Vasu"
    // }

    // console.log(myObj)

    // 3

    // myObj = {
    //     name: "Sagar",
    //     last: "Vasu"
    // }

    // let {name,last} = myObj;

    // console.log(name)
    // console.log(last)

    // 4
    // myObj = {
    //     name: "Sagar",
    //     last: "Vasu"
    // }

    // let {name,last} = myObj;
    // function myFunc(value){
    //     console.log(value === myObj)
    // }

    // name = "kamal";
    // last = "hussian"
    // myFunc({name,last}= myObj)
    // console.log(name)
    // console.log(last)


    // 5
    // let node = {
    // type: "Identifier",
    // name: "foo"
    // };
    // let { type: localType, name: localName } = node;
    // console.log(localType); // "Identifier"
    // console.log(localName);  // "foo"

    // 6
    // let myObj = {
    //     name: "Sagar",
    //     last: "Vasu"
    // }

// let {name,last} = myObj;
// function myFunc(value){
//     console.log(myObj)
//     console.log(value)
//     console.log(value === myObj )
// }
// myFunc(myObj)

// 7
// let {name,last} = myObj;
// function myFunc(value){
//     console.log(myObj)
//     console.log(value)
//     console.log(value === myObj )
// }

// name = "kamal";
// last = "hussian"
// myFunc({}= myObj) //when we not send any parameter it also prepares replica of object
// console.log(name)
// console.log(last)

// 8
// let {name,last} = myObj;
// function myFunc(value){
//     console.log(myObj)
//     console.log(value)
//     console.log(value === myObj )
// }

// name = "kamal";
// last = "hussian"
// myFunc({name}= myObj) //when we give one  parameter it also preares fully replica
// console.log(name)
// console.log(last)

// 9
// myObj = {
//     name: "Sagar",
//     last: "Vasu"
// }


// name = "kamal";
// last = "hussian"

// let{name:myName, last: mylastName} = myObj 
// console.log(myName)
// console.log(mylastName)

// 10
// let node = {
//     type: "Identifier",
//     name: "foo",
//     loc: {
//      start: {
//       line: 1,
//       column: 1
//       },
//      end: {
//       line: 1,
//       column: 4,
//        list : ["Sagar","Kamal","Darpan"]
//       }
//     }
//    };
//    // extract node.loc.start

//    let {loc:{end:{list:[x,y,z]}}} = node;

//    console.log(x);
//    console.log(y);
//    console.log(z);



// Array Destructure in ES6

// 1
// let x = [1,2,3,4,5]
// let [a,b,c,,d] = x;
// console.log(a,b,c,d)

// 2
// let colors = [ 1, 2, 4 ];
// let [ , , thirdColor ] = colors;
// console.log(thirdColor); 

// swapping variables in ECMAScript 6

// let a = 1,
// b = 2;
// [ a, b ] = [ b, a ];
// console.log(a); // 2
// console.log(b); // 1

// let list = [ 1 ];
// let [ no1, no2 = 2 ] = list;
// console.log(no1); // 1
// console.log(no2); // 2


// 4

// let colors = [ "red", "green", "blue","dsjhjbjsd","DAJJKH" ];
// let [ firstColor,nd, nnd, ...restColors ] = colors;
// console.log(firstColor); 
// console.log(nd); 
// console.log(nnd);
// console.log(restColors.length); 
// console.log(restColors[0]); 
// console.log(restColors[1]); 

// 5
// let node = {
//     type: "Identifier",
//     name: "foo",
//     loc: { 
//         start: {
//             line: 1,
//             column: 1
//             },
//         end: {
//              line: 1,
//               column: 4,
//                list : ["Sagar","Kamal","Darpan",["Amar","Munesh","Rashid"],{
//                    a1:"abc",
//                    a2: "abc2",
//                    a3: "abc3"

//                }]
//             }
//     }
//     };

//     //  extract node.loc.start 
//     let {loc:{end:{list:[...a]}}} = node;
//     console.log(a.length);
//     console.log(a[0]);
//     console.log(a[1]);
//     console.log(a[2]);

//     console.log(a[3][0]);
//     console.log(a[3][1]);
//     console.log(a[3][2]);



// constructor function with es6

// 1
// class myNames{

//     constructor(name1){
//         this.name1 = name1
//     }

//     yourName(){
//         console.log(this.name1)
//     }

// }
// let person = new myNames("Vasu");
// person.yourName(); // outputs "Nicholas"
// console.log(person instanceof myNames); // true
// console.log(person instanceof Object); // true
// console.log(typeof myNames); // "function"
// console.log(typeof myNames.prototype.yourName); // "function"


// 2

// class Plan{
//     constructor(name, price, space, transfer, pages){
//         this.name = name;
//         this.price = price;
//         this.space = space;
//         this.transfer = transfer;
//         this.pages = pages;
//     }
// }
// let plan1 = new Plan(`Basic`, 3.99, 100, 1000, 10);
// let plan2 = new Plan(`Premium`, 5.99, 500, 5000, 50);
// let plan3 = new Plan(`Ultimate`, 9.99, 2000, 20000, 500);

// console.log(plan1)
// console.log(plan2)
// console.log(plan3)


// 3
//  class Plan{

//     constructor(name, price, space, transfer, pages,discountMonths){
//         this.name = name;
//         this.price = price;
//         this.space = space;
//         this.transfer = transfer;
//         this.pages = pages;
//         this.discountMonths = discountMonths;
//         this.calcAnnual = function(percentIfDisc) {
//         let bestPrice = this.price;
//         let currDate = new Date();
//         let thisMo = currDate.getMonth();
//         for (let i = 0; i < this.discountMonths.length; i++) {
//             if (this.discountMonths[i] === thisMo) {
//                 bestPrice = this.price * percentIfDisc;
//                 break;
//             }
//         }
//         return bestPrice * 12;
//     };
// }
// }
// let p1 = new Plan(`Basic`, 3.99, 100, 1000, 10,[5, 4]);
// let p2 = new Plan(`Premium`, 5.99, 500, 5000, 50,[5, 7,11]);
// let p3 = new Plan(`Ultimate`, 9.99, 2000, 20000, 500,[6, 7]);

// let annualPrice = p1.calcAnnual(.85);
// console.log(annualPrice)


// 4

// Classes as First-Class Citizens

// function myName(a){
//     console.log(a)
// }

// function myName1(g){
//     let d = g
//     let e = "19"
//     return  g
// }

// let c = myName1("Sagar")
// let f = myName(myName())

// Genretor and Iterator In ES6 

// 1

// var colors = ["red", "green", "blue"];
// for (var i = 0, len = colors.length; i < len; i++) {
// console.log(colors[i]);
// }

// 2

// function createIterator(items) {
// var i = 0;
// return {
// next: function() {
// var done = (i >= items.length);
// var value = !done ? items[i++] : undefined;
// return {
// done: done,
// value: value
// };
// }
// };
// }
// var iterator = createIterator([1, 2, 3]);
// console.log(iterator.next()); // "{ value: 1, done: false }"
// console.log(iterator.next()); // "{ value: 2, done: false }"
// console.log(iterator.next()); // "{ value: 3, done: false }"
// console.log(iterator.next()); // "{ value: undefined, done: true }"


// 3
// function *createIterator() {
// yield 1;
// yield 2;
// yield 3;
// }
// // generators are called like regular functions but return an iterator
// let iterator = createIterator();
// console.log(iterator.next().value); // 1
// console.log(iterator.next().value); // 2
// console.log(iterator.next().value); // 3

// 4

// function *createIterator(items) {
// for (let i = 0; i < items.length; i++) {
// yield items[i];
// }
// }
// let iterator = createIterator([1, 2, 3]);
// console.log(iterator.next()); // "{ value: 1, done: false }"
// console.log(iterator.next()); // "{ value: 2, done: false }"
// console.log(iterator.next()); // "{ value: 3, done: false }"
// console.log(iterator.next()); // "{ value: undefined, done: true }"
// // for all further calls
// console.log(iterator.next()); // "{ value: undefined, done: true }"




// Promises
// 1
// let promise = Promise.resolve("Resolve Darpan");

// promise.then(function(x){
// 	console.log(x)
// })

// //2
// let promise1 = Promise.reject("Reject Darpan");
// promise1.catch(function(x){
// 	console.log(x)
// })

// //4
// let promise5 = Promise.reject("Reject2 Darpan");

// promise5.then(null,function(x){
// 	console.log(x)
// });

// //4
// let promise4 = new Promise(function(resolve, reject) {
//  console.log("Promise");
//  resolve();
// });
// promise4.then(function() {
//  console.log("Resolved.");
// });
// console.log("Hi!");


// let p1 = prompt("Enter your value");


// let promise = new Promise(function(resolve,reject){
//     if(Number(p1)>10){
//         console.log(`Condition is true and value is ${p1}`);   
//         resolve();
//     }
//     else{
//     console.log(`Condition is false and value is ${p1}`);
//     }

// });














