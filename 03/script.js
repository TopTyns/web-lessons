alert("Створити об’єкт, який містить інформацію про назву товару, ціну та кількість.");
let product = new Object();
let sum = 0;
product.name = "";
product.coust = "";
product.amount = "";
product.name = prompt("Назва товару");
product.coust = prompt("Ціна 1 одиниці товару");
product.amount = prompt("Кількість товару");
alert("Назва товару: " + product.name + "\nЦіна товару: " + product.coust + "\nКількість товару: " + product.amount);

alert("Створити метод, який підраховує вартість.");
Summ();
function Summ(){
    sum = product.coust * product.amount;
}
alert("Вартість усього: " + sum)








