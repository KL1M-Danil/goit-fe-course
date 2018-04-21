'use strict';

let groupTaba = 6;
let groupSharm = 15;
let groupHurga = 25;

const userInput = prompt('Введите количество мест');
const sumSpot = Number(userInput);

const isValidInput = userInput !== null && !Number.isNaN(sumSpot);

if (isValidInput) {
  let group;
  let sum;

  if (groupTaba >= sumSpot) {
    group = 'Taba';

    confirm(`Есть место в группе ${group}, вы согласны быть в ней?`);

    console.log(confirm);

    if (confirm) {
      groupTaba = groupTaba - sumSpot;
      alert(`Приятного путешествия в группе ${group}`);
    } else {
      alert('Нам очень жаль, приходите еще!');

      console.log(alert);
    }
  } else if (groupSharm >= sumSpot) {
    group = 'Sharm';

    confirm(`Есть место в группе ${group}, вы согласны быть в ней?`);

    if (confirm) {
      groupSharm = groupSharm - sumSpot;
      alert(`Приятного путешествия в группе ${group}`);
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  } else if (groupHurga >= sumSpot) {
    group = 'Hurga';

    confirm(`Есть место в группе ${group}, вы согласны быть в ней?`);

    if (confirm) {
      groupHurga = groupHurga - sumSpot;
      alert(`Приятного путешествия в группе ${group}`);
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  } else {
    alert('Извините, мест нет');
  }
} else {
  alert('Oшибка ввода!');
} 

