alert("Створити об’єкт, який містить інформацію про назву товару, ціну та кількість.");
let _name = prompt("Введіть назву товару:"); 
let _coust = prompt("Введіть ціну за одиницю товару:"); 
let _amount = prompt("Введіть кількість товару:"); 
let sum = 0;

let object = {     
    name: _name, 
    coust: _coust, 
    amount: _amount,   
  };

  function CalculateAQmount(){
      sum = _coust*_amount*1;
  }
  CalculateAQmount();
  alert("Створити метод, який підраховує вартість");
  alert("Вартість: " + sum);