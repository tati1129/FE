//Сравнить две константы двумя разными способами: 
//- Создать две константы, присвоив одной значение строкового типа, а второй числового
//- Сравнить эти константы и вывести в консоль результат типа boolean так, чтобы
//в одном случае ( == ) он был true, а в другом ( === ) false.

const number = 123;
const numberString = '123';
 console.log(number == numberString);
 console.log(number === numberString);


 //Реализовать решение задачи в JS: 
 //- У нас есть 100 (создать константу)
 //- Цена помидоров на рынке - 10 (создать константу)
 //- Цена огурцов на рынке - 5 (создать константу)
 //- Цена яблок на рынке - 15 (создать константу)
 //- Оставшиеся деньги потратим на орехи (создать переменную)

//- Мы купили на рынке по два килограмма огурцов, помидоров и яблок (создать переменную)
//- оставшиеся деньги потратили на орехи (присвоить значение переменной)

//- сколько денег мы потратили на орехи? (вывести переменную в консоль)
//- на что мы потратили больше денег на орехи или остальное? (вывести boolean значение в консоль)

//- в зависимости от того потратили ли мы на орехи больше времени чем на всё остальное
//выводите в консоль сообщение об этом 'Больше потратили на орехи' или 'Больше потратили на фрукты и овощи'

const money = 100;
const priceTomatos = 10;
const priceCucumbers = 5;
const priceApples = 15;
let weight = 2;
let foods = weight*(priceTomatos + priceCucumbers + priceApples);
let nuts = money - weight*(priceTomatos + priceCucumbers + priceApples);


console.log('На орехи потратили ' + nuts);

//let result=
//nuts>foods ? 'Больше потратили на орехи' : 'Больше потратили на фрукты и овощи';
//console.log(result);

if (nuts>foods) {
    result='Больше потратили на орехи';
} else {
    result='Больше потратили на фрукты и овощи';
}
console.log(result);
