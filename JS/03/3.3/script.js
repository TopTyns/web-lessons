alert("В програмі зберігається масив з електронними поштами клієнтів. В діалогове вікно вводиться адреса електронної пошти. Вивести у відповідь “така електронна адреса вже зареєстрована!”, якщо вона вже є в цьому масиві, в іншому випадку - додати її до масиву. Продовжити введення до тих пір, поки не буде натиснута кнопка Отмена. Після цього вивести через кому всі адреси електронних пошт  у діалогове вікно.");

let arr = ['ivanivanov@gmail.com', 'grigoriyFilyaeev1873@gmail.com', 'putin2022@urk.net', 'AntonSmozh@gmail.com',];
let str = '';
let isAvailable = false;
let result = true;
let str2 = '';
while(result){
    str = prompt('Введіть адресу: ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            isAvailable = true;
        }
        else{
            isAvailable =  false;
        }
    }
    
    if(isAvailable){
        alert("Така електронна адреса вже зареєстрована!");
    }
    else{
        arr.push(str);
        alert("Такої адреси немає!");
    }
    result = confirm("Продовжити? ");
}

if(result == false){
    for(let j=0; j< arr.length; j++){
        str2 += arr[j] + ',  ';
    }
    alert(str2);
}





