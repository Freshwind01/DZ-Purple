'use strict';
           

let passw='клаустрофобия'; //задуманное слово

function crypt(word) 
{
const arr=word.split('');  //Разбивка на буквы
//    console.log(arr);  //вывожу массив - просто посмотреть, что получилось
    for (let i = arr.length - 1; i >0; ) 
   {   //Начиная с последней соседние буквы меняются местами.
      let j = i - 1;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i=i-2
   }
    return arr.join('');
}

function check(passw,modpassw)
{
let res=(crypt(modpassw)===passw); //результат сравнения записываем в res
return console.log(res);
}

let modpassw=crypt(passw);
console.log('После перестановки получилось:',modpassw);  //вывожу результат перестановки
console.log('После повторной перестановки получилось:',crypt(modpassw));  //вывожу результат обратной перестановки

check(modpassw,'клаустрофобия');//проверка работы с правильным словом
check(modpassw,'абракадабра');//проверка работы с неверным словом