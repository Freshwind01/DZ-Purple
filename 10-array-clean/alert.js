'use strict';
           

let arr2=[1,3,8,12,5,7,2,19,9];

const Fillter2= (a)=> { 
                const res2=(a) => {    
                        if ((a%2)===0) return true;  //проверяет на четность.
                        else  return false;} 
     
for (let i=0;i<a.length;i++)
    {
      if (res2(a[i])===true)  delete a[i];   //удаляем четные
        
    }
return  a.flat();  //удаляет пустые ячейки
}

console.log(Fillter2(arr2));

