function convert() {
    let kg = prompt('Введіть кількість кілограм:');
    let kilogram = Number(kg);
    console.log(typeof(kilogram));
    if(kilogram>0 && !isNaN(kilogram) ){
        let pounds = kg / 2.20;
        let ounces = kg / 35.2;
        let centners = kg / 100;
        let tons = kg / 1000;

        alert(`${kilogram} кілограм = ${pounds.toFixed(2)} фунтів`);
        alert(`${kilogram} кілограм = ${ounces.toFixed(2)} унцій`);
        alert(`${kilogram} кілограм = ${centners.toFixed(2)} центнерів`);
        alert(`${kilogram} кілограм = ${tons.toFixed(2)} тонни`);
        console.log(`${kilogram} кілограм = ${pounds.toFixed(2)} фунтів, ${ounces.toFixed(2)} унцій, ${centners.toFixed(2)} центнерів, ${tons.toFixed(2)} тонни `);
    }
    else{
        alert('Помилка!');

    }
}


function interest() {
    let sum = +prompt('Введіть суму депозиту:'); 
    console.log(typeof(sum));
    let profit;

    if(!isNaN(sum) && sum > 0){
        if(sum < 10000){
            profit = sum / 100 * 15;
        }
        else{
            profit = sum / 100 * 17;
        }
        alert(`${profit} сума отримана за рік `);
        console.log(`${profit} сума отримана за рік `);
    }
    else{
        alert('Помилка!');
    }

}
