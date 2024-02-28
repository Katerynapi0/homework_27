'use strict';
//Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

let fieldHtml = '<table>';
let count = 1;
//Заповнення таблиці
for(let i = 0; i < 10; i++){
    fieldHtml += '<tr>';
    for(let j = 0; j < 10; j++){
        fieldHtml += '<td>' + count++ + '</td>';
    }
    fieldHtml += '</tr>';
}
//Кінець таблиці
fieldHtml += '</table>';
//Вставка таблиці в id="myTable"
document.getElementById("myTable").innerHTML = fieldHtml;
  