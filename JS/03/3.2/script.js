alert("Вводити в діалогове вікно числа до тих пір, поки не буде введений будь-який символ, після цього вивести у вікно всі числа через кому, порахувати їх суму та кількість парних та непарних чисел.");

let i =0;
let arr = [];
let isSymb = true;

while(isSymb){
    let symb = prompt("Введіть число, щоб закінчити, введіть будь-який інший символ");
    if(!isNaN(symb)){
        arr[i] = symb;
        i++;
    }
    else{
        isSymb = false;
    }
}

let paired = 0;
let unPaired = 0;
let str = '';
let sum = +0;
for(let j=0; j< arr.length; j++)
{
    if(arr[j] % 2 == 0)
    {
        paired++;
    }
    else{
        unPaired++;
    }
    sum += +arr[j];
    str += arr[j] + ',';
}
alert(str);
alert("Сума: " + sum);
alert("Парних чисел: " + paired);
alert("Непарних: " + unPaired);
