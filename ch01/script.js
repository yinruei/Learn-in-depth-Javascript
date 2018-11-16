//The first Javascript
// console.log('hello world!');

////javascript變量類型////
// var name = 'John';
// console.log(name)

// var age = 32;
// console.log(age);

// //Boolean
// var isMale = false;
// console.log(isMale);

//undefine

//Null

//=========javascript變量的特徵====================

// var name = 'Kan ';
// var age = 28;

// console.log(name + age);
// console.log(age + age);

// console.log(name +  ' is '  + age + ' years old.');

// age = 'twenty eight';

// console.log(name +  ' is ' + age + ' years old.');

//=========if語句================================

// var isMale = false;

// if (isMale){
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// var isFemale = 'Yes';
// if (isFemale == 'Yes') {
//   console.log('She is female.');
// } else {
//   console.log('He is male.');
// }

// //雙等於跟三等於的差別
// if (23 == '23') {
//     console.log('equal');
// } else {
//     console.log('not equal');
// }

//==========if語句的範圍表達式==============

// var number = 20;
// if (number < 20) {
//   //code
// } else if (number > 30) {
//   //code
// } else {
//   //code
// }

// //必須兩個條件都需要滿足
// if (number > 20 && number <30) {
//   //code
// }

// //兩個條件符合一個就滿足
// if (number < 18 || number >65) {
//   //code
// }

// //!表示否定,number等於false表示true ;number等於true表示false
// if (!number) {
//   //code
// }

//==================switch case語句======================

// var newcase = 'case 7'

// switch (newcase) {
//   case 'case 1':
//     console.log('That is case 1:');
//     break;
//   case 'case 2':
//     console.log('That is case 2');
//     break;
//   case 'case 3':
//     console.log('That is case 3');
//     break;
//   default:
//     console.log('That is other case.');
// }

//===================function========================

// function myfirstfirstfunction() {
//   console.log('That is() ny firstfunction');
// }
// myfirstfirstfunction();

// function sum(a,b) {
//   var c = a + b;
//   console.log(c);
// }

// sum(3,4);
// sum(4,4);

// function returnFunction(a) {
//   var b = a + 5;
//   return b;
// }

// var result = returnFunction(3);
// console.log(result);

//====================array數組==========================

// var names = ['Kan', 'John', 'Kelly', 'Bob'];

// var numbers = [1,2,3,4,5];

// console.log(names[0]);

// var kan = ['Kan', 28, 'teacher'];

// console.log(kan[1]);
// //push是將新的值放在array的最後面，unshift則是放在最前面，shift則是刪除最前面，pop則是刪除最後面
// //indexOf則是放在第幾個位置
// names.push('Tom');
// names.unshift('Chris');
// names.shift();
// names.pop();
// console.log(names);
// console.log(names.indexOf('Kelly'));

//=====================Object對象======================

// var ken = {
//   name: 'Ken',
//   lastName:'Cen',
//   age:28,
//   job:'teacher'
  
// }

// ken['name']='Tom';
// console.log(ken['name']);

// ken.name = 'Ken';
// console.log(ken['name']);

// var jacky = new Object();

// jacky.name = 'jacky';
// jacky.lastName = 'Chen';
// jacky.age = 22;

// console.log(jacky);


// var ken = {
//     name: 'Ken',
//     lastName:'Cen',
//     age:28,
//     job:'teacher',
//     family:['Ken','Tom','Kelly'],
//     calculate: function yearOfBirth(myAge) {
//         return 2017 - myAge;
//     }
// }

// console.log(ken.family[1]);
// console.log(ken.calculate(10));


//method = function

// var ken = {
//     name: 'Ken',
//     lastName:'Cen',
//     age:28,
//     job:'teacher',
//     family:['Ken','Tom','Kelly'],
//     calculate: function yearOfBirth(myAge) {
//         return 2017 - this.age;
//     }
// }

// var yeasBirthBirth = ken.calculate();
// ken.yearOfBirth = yeasBirthBirth;

// console.log(ken);


//======this method===============================
// var ken = {
//     name: 'Ken',
//     lastName:'Cen',
//     age:28,
//     job:'teacher',
//     family:['Ken','Tom','Kelly'],
//     calculate: function yearOfBirth() {
//         this.yearOfBirth = 2017 - this.age;
//     }
// }

// ken.calculate();
// console.log(ken);


// var tom = {
//     name: 'Tom',
//     lastName:'Cen',
//     age:20,
//     job:'teacher',
//     family:['Ken','Tom','Kelly'],
//     calculate: function yearOfBirth() {
//         this.yearOfBirth = 2017 - this.age;
//     }
// }

// tom.calculate();
// console.log(tom);



//========for語句=========================
// 1
// 2
// 3
// 4
// 5

// for (var i = 0; i<6; i = i + 2) {
//     console.log(i);
// }

// var names = ['Ken','John','Jacky','Tom'];
// for (var i = 0; i <= names.length -1; i++) {
//     console.log(names[i])
// }

// for (var i = names.length -1; i >= 0; i--) {
//     console.log(names[i])
// }


//========while語句========================
// 1
// 2
// 3
// 4
// 5

// var i = 1;

// while (i<=5) {
//     console.log(i);
//     i++
// }

// for (var i = 1; i<=5; i++) {
//     if (i==3){
//         break;
//     }
//     console.log(i);
// }

// for (var i = 1; i<=5; i++) {
//     if (i==3){
//         continue;
//     }
//     console.log(i);
// }

//===============Execution stack=========================

// //Global exeution context
// var name = 'Ken';

// //exeution context
// function first() {

//     var a ='Hello';
//     second();
//     console.log(a+name);

// }

// //exeution context
// function second() {

//     var b = 'Hey';
//     third();
//     console.log(b+name);

// }

// //exeution context
// function third() {

//     var c='Hi';
//     console.log(c+name);

// }

// first();

//=================VO-Vaiable Object================================

// //Excution context=====================
// 1. 創建

//    初始化空間Scope chain;
//    創建VO-Variable Object;
     
//       function(arguments object)
//       掃描function - pointer
//       掃描variable - undefined

//   this variable

// 2. 運行

//    進行每一行的運行


// function foo(i) {
//     var a = 'hello';
//     var b = function privateB() {

//     };
//     function c() {

//     }
// }

// foo(22);

// //function創建階段
// fooExutionContext = {
//     scopechain:{...},
//     variableObject:{
//         arguments:{
//           0, 22,
//           length: 1
//         }
//         i:22,
//         c:pointer to function c()
//         a:undefined,
//         b:undefined,
    
//     }
// }
// this{...}

// //function運行階段
// fooExecutionContext = {
//     scopeChain:{...},
//     variableObject:{
//       0: 22,
//       length:1 
//     }
//     i: 22,
//     c: pointer to function c(),
//     a: 'hello',
//     b: pointer to function privateB()

// }

// this{...}

//======Hoisting================================
// sum(6,4)
// function sum(a,b) {

//     console.log(a+b);
// }


// sumFunc(6,4);
// var sumFunc = function sum(a,b) {
//     console.log(a+b);
// }
// sumFunc(6,4);


// //Global execution context
// var age = 28;
// // console.log(age);

// function foo() {
    
//     var age = 65;
//     console.log(age);

// }

// foo(); //這是function裡面的age
// console.log(age);//這是外面的age，也就是Global execution contex


//====================Scope & ScopeChain===========

// //Global scope [VOglobal]
// var a ='Hello';
// first();

// // first() scope[VO1] + [VOglobal]
// function first() {

//     var b = 'Hi';
//     second();

//     //second() scope[VO2] +[VO1] + [VOglobal]
//     function second() {

//         var c = 'Hey';
//         console.log(a + b + c);

//     }
// }



// //Global scope [VOglobal]
// var a ='Hello';
// first();

// // first() scope[VO1] + [VOglobal]
// function first() {

//     var b = 'Hi';
//     second();

//     //second() scope[VO2] +[VO1] + [VOglobal]
//     function second() {

//         var c = 'Hey';
//         third();
        
//     }
// }

// function third() {

//     var d ='Ken';
//     console.log(a + b + c + d);//只看的到a跟

// }


//====================this variable=========

//global object -全局對象
// console.log(this);

// 當我們使用function, 'this'就會指向global object - 全局對象
// function thisFunc() {

//     console.log(this);

// }


// 當我們使用method的時候， 'this'就會指向當前的object, methon就是在object裡面的function
var ken = {
    
    name: 'ken',
    age: 28,
    calculate: function yearOfBirth() {

        console.log(this);
        console.log(2017 - this.age);
        
        function innerFunction() {

            console.log(this);

        }

        innerFunction();
    }
}

ken.calculate();

var John = {

    name: 'John',
    age:39,    
}

John.calculate = ken.calculate;
John.calculate();