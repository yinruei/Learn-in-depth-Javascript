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

for (var i = 1; i<=5; i++) {
    if (i==3){
        continue;
    }
    console.log(i);
}