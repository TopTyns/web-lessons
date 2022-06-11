alert("Завдання 1. Створити об’єкт, який містить інформацію про назву товару, ціну та кількість.");
alert("Завдання 2. Створити метод, який підраховує вартість");
alert("Завдання 3. Реалізувати фабричну функцію для створення об’єкта");

  function createObject(name, coust, amount){
    return {
        name: name,
        coust: coust,
        amount: amount,
        info: function(){
            alert(`Назва товару: ${this.name} \nВартість товару: ${this.coust} \nКількість товару: ${this.amount}`)
        },
        calc: function(){
            let sum = coust * amount * 1;
            alert("Вартість усього: " + sum);
        }
    }
}

let product = createObject("Зошит", 5, 4);

product.info();
product.calc();