'use strict';
           
let arr=[1,3,8,12,5,7,2,19,9];
let arr2=[1,3,8,12,5,7,2,19,9];

const res=(a) => {    //четная-нечетная
      if ((a%2)===0) return true;
      else return false; }

const Fillter= (a)=> {
for (let i=0;i<a.length;i++)
    {
      if (res(a[i])===true)  delete a[i];
        
    }
return  a.flat();
}

console.log(Fillter(arr));

//console.log(res(4));

const Fillter2= (a)=> { 
                const res2=(a) => {    
                        if ((a%2)===0) return true;
                        else  return false;} 
     
for (let i=0;i<a.length;i++)
    {
      if (res2(a[i])===true)  delete a[i];
        
    }
return  a.flat();
}
console.log(Fillter2(arr2));