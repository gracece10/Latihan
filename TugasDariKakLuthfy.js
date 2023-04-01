//Nomor 3
//Penggunaan Var
var a = 'a';
a = 'AA'; //Valid
console.log(a)
//Penggunaan Let
let b = 'b';
b = 'BB'; //Valid
console.log(b)
//Penggunaan Const
const Data = 110;
Data = 111; //=> Uncaught Type Error:Assignment to constant variabel
console.log(Data)

//Nomor 4
//penggunaan mode strict
'use strict'
nama='iqbal' //akan muncul error krn JS tdk medefinisi nama sbg variabel
console.log(nama)

//tanpa mode strict
nama = 'iqbal'
console.log(nama)

//Nomor 5
//output 1111
var number = "11";
number += 11;
console.log(number);

//output 22
var number = 11;
number += 11;
console.log(number);