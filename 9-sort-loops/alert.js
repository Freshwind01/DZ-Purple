'use strict';
           
let numbers = [1, 40, -5, 10, 0];


for (let i=0;i<numbers.length;i++)
{
    
    for (let j=0;j<numbers.length-i;j++)
         {
        if ( numbers[j] > numbers[j+1])
           {
            
            [numbers[j],numbers[j+1]]= [numbers[j+1],numbers[j]];
                        
           }

        }       
           
}
console.log(numbers);
