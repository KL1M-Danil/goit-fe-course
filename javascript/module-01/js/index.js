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
  let isSure;

  if (groupTaba >= sumSpot) {
    group = 'Taba';

    isSure = confirm(`Есть место в группе ${group}, вы согласны быть в ней?`);

    if (isSure) {
      groupTaba = groupTaba - sumSpot;
      alert(`Приятного путешествия в группе ${group}`);
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  } else if (groupSharm >= sumSpot) {
    group = 'Sharm';

    isSure = confirm(`Есть место в группе ${group}, вы согласны быть в ней?`);

    if (isSure) {
      groupSharm = groupSharm - sumSpot;
      alert(`Приятного путешествия в группе ${group}`);
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  } else if (groupHurga >= sumSpot) {
    group = 'Hurga';

    isSure = confirm(`Есть место в группе ${group}, вы согласны быть в ней?`);

    if (isSure) {
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
