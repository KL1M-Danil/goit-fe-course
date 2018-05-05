'use strict';

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const checkLoginValidity = function(login) {
  return login.length >= 4 && login.length <= 16;
};

const checkIfLoginExists = function(logins, login) {
  return logins.includes(login);
};

const addLogin = function(logins, login) {
  if (!checkLoginValidity(login)) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }

  if (checkIfLoginExists(logins, login)) {
    return "Такой логин уже используется!";
  }

  logins.push(login);
  return "Логин успешно добавлен!";
};

