'use strict';
           

// Функция конвертации валют
function convertCurrency(amount, fromCurrency, toCurrency) {
    // Ставки конвертации (примерные значения)
    const rates = {
        'RUB': {
            'USD': 78,  // 1 доллар = 78 рублей
            'EUR': 92  // 1 евро = 91 рубля
        },
        'USD': {
            'RUB': 0.013,
            'EUR': 1.17 // 1 евро = 1.17 долларов
        },
        'EUR': {
            'RUB': 0.01,
            'USD': 0.85
        }
    };

    // Проверяем наличие валюты в объекте ставок
    if (!rates[fromCurrency] || !rates[toCurrency]) {
        return null;
    }

    // Конвертируем сумму
    const rate = rates[fromCurrency][toCurrency];

    const res= amount / rate;
    return res.toFixed(2);
}

// Пример использования:
console.log(convertCurrency(1000, 'RUB', 'USD'));  
console.log(convertCurrency(1000, 'EUR', 'RUB'));   
console.log(convertCurrency(200, 'USD', 'RUB'));   

