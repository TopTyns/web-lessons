function convert() {
    let kg = prompt('Введіть кількість кілограм:');

    let pounds = kg / 2.20;
    let ounces = kg / 35.2;
    let centners = kg / 100;
    let tons = kg / 1000;

    alert(`${kg} кілограм = ${pounds.toFixed(2)} фунтів`);
    alert(`${kg} кілограм = ${ounces.toFixed(2)} унцій`);
    alert(`${kg} кілограм = ${centners.toFixed(2)} центнерів`);
    alert(`${kg} кілограм = ${tons.toFixed(2)} тонни`);
}


function interest() {
    let sum = prompt('Введіть суму депозиту:'); 
    let profit;
    if(sum < 10000){
        profit = sum / 100 * 15;
    }
    else{
        profit = sum / 100 * 17;
    }
    alert(`${profit} сума отримана за рік `);

}
