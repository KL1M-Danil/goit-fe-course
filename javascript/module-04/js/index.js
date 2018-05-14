"use strict";

function Cashier(name, products) {
  this.name = name;
  this.products = products;
  this.totalPrice = 0;
  this.customerMoney = 0;
  this.changeAmount = 0;

  this.countTotalPrice = function(order) {
    let val = Object.values(order);

    for (let i = 0, lengthOrder = val.length; i < lengthOrder; i += 1) {
      this.totalPrice += val[i];
    }
  };

  this.getCustomerMoney = function() {
    do {
      this.customerMoney = prompt(`Здравствуйте, с Ваc ${this.totalPrice}$`);

      if (this.customerMoney === null) {
        return null;
        break;
      }
    } while (this.customerMoney < this.totalPrice);
  };

  this.countChange = function() {
    this.changeAmount = this.customerMoney - this.totalPrice;
  };

  this.reset = function() {
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
  };

  this.serve = function(order) {
    this.countTotalPrice(order);
    this.getCustomerMoney();
    this.countChange();

    if (this.customerMoney !== null) {
      alert(`Спасибо за покупку, ваша сдача ${this.changeAmount}$`);
    } else {
      alert("Очень жаль, что-то пошло не так, приходите еще");
    }
    this.reset();
  };
}

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

const cashier = new Cashier("Mango", products);

cashier.serve(order);
