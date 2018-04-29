'use strict';

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let userInput;
let max = 3;
let lastChance = max;
let hasPass;

do {
  userInput = prompt('Введите ваш пароль:');
  lastChance -= 1;
  if (userInput === null) {
    break;
  }

  for (let value of passwords) {
    if (value === userInput) {
      alert('Добро пожаловать!');
      hasPass = true;
      break;
    }
  }
  if (hasPass) {
    break;
  } else {
    console.log(lastChance);
    alert(`Неверный пароль, у вас осталось ${lastChance} попыток`);
  }
} while (lastChance > 0);

if ((lastChance === 1)) {
  alert('У вас закончились попытки, аккаунт заблокирован!');
}
