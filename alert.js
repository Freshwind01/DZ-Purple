'use strict';
           
//hasLicence - имеет права
//age - возраст
//isDrunk - пьян
const hasLicence=true, age=18,isDrunk=false;

const result=((age>=18)&&hasLicence&&(!isDrunk))?console.log('Может'):console.log('Не может');
