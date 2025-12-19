'use strict';
           

let UserLang=prompt('Укажите желаемый язык (2 буквы):','Ru');
if (UserLang) {
UserLang=UserLang.toLowerCase();

let language = ['cn','ru','fr','ge','sa'];
let greetings =['Nihao!','Здравствуйте!','Bonjour!','გამარჯობა!','Namaste!']

if (typeof UserLang==='string')
{
//console.log(UserLang);
//console.log(language[1].toLowerCase());

switch (UserLang) {
        case language[0]: console.log(greetings[0]);
        break;
        case language[1]: console.log(greetings[1]);
        break;
        case language[2]: console.log(greetings[2]);
        break;
        case language[3]: console.log(greetings[3]);
        break;
        case language[4]: console.log(greetings[4]);
        break;
        default: console.log('Это не является кодом какого-либо языка, либо я его не знаю.');
                     }   

}
}
else 
        console.log('Пользователь ввел нулевое значение или отказался от ввода.');        