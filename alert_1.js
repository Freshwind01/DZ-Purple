'use strict';

const addressLat=15; //- адрес назначения lat (координата конечной точки по оси x)
const addressLong=8; //- адрес назначения long (координата конечной точки по оси y)
const positionLat=3;//- текущее положение пользователя lat (координата начальной точки по оси x)
const positionLong=2;//- текущее положение пользователя long (координата начальной точки по оси y)
let S,text1,text2,text3;
text1='Нужно найти длину отрезка на координатной плоскости.';
text2='Исходные координаты на плоскости заданы (3,2) и (15,8).';
console.log(text1);
console.log(text2);
S= Math.sqrt((Math.abs(addressLat)-Math.abs(positionLat))**2+(Math.abs(addressLong)-Math.abs(positionLat))**2);
console.log('Расстояние между этими точками  равно: '+parseFloat(S.toFixed(2)));
text3='Применен модуль, потому что координаты могут быть и отрицательными, про это ничего не сказано в условии.'+'\n'+
'Применено округление до двух знаков и перевод обратно в число.';
console.log(text3);