"use strict";

class Hamburger {
  constructor(size, stuffing) {
    Hamburger.SIZE_SMALL = "SIZE_SMALL";
    Hamburger.SIZE_LARGE = "SIZE_LARGE";
    this.size = size;
    this.stuffing = stuffing;

    Hamburger.SIZES = {
      [Hamburger.SIZE_SMALL]: {
        price: 30,
        calories: 50
      },
      [Hamburger.SIZE_LARGE]: {
        price: 50,
        calories: 100
      }
    };

    Hamburger.STUFFING_CHEESE = "STUFFING_CHEESE";
    Hamburger.STUFFING_SALAD = "STUFFING_SALAD";
    Hamburger.STUFFING_MEAT = "STUFFING_MEAT";

    Hamburger.STUFFINGS = {
      [Hamburger.STUFFING_CHEESE]: {
        price: 15,
        calories: 20
      },
      [Hamburger.STUFFING_SALAD]: {
        price: 20,
        calories: 5
      },
      [Hamburger.STUFFING_MEAT]: {
        price: 35,
        calories: 15
      }
    };

    Hamburger.TOPPING_SPICE = "TOPPING_SPICE";
    Hamburger.TOPPING_SAUCE = "TOPPING_SAUCE";
    this.toppings = [];

    Hamburger.TOPPINGS = {
      [Hamburger.TOPPING_SPICE]: {
        price: 10,
        calories: 0
      },
      [Hamburger.TOPPING_SAUCE]: {
        price: 15,
        calories: 5
      }
    };
  }

  addTopping(topping) {
    if (!this.toppings.includes(topping)) {
      this.toppings.push(topping);
    }
  }

  removeTopping(topping) {
    if (this.toppings.includes(topping)) {
      //let foundTopp = this.toppings.filter(topping);
      delete this.toppings[topping];
      //console.log(foundTopp);
    }
  }

  getToppings() {
    return this.toppings;
  }

  getSize() {
    return Hamburger.SIZES[this.size];
  }

  getStuffing() {
    return Hamburger.STUFFINGS[this.stuffing];
  }

  calculatePrice() {
    const summForTopp = this.toppings.reduce(
      (acc, topping) => acc + Hamburger.TOPPINGS[topping].price,
      0
    );

    const summForSize = Hamburger.SIZES[this.size].price;
    console.log(summForSize);

    const summForStuffing = Hamburger.STUFFINGS[this.stuffing].price;
  }

  calculateCalories() {
    const summForTopp = this.toppings.reduce(
      (acc, topping) => acc + Hamburger.TOPPINGS[topping].calories,
      0
    );
  }
}

const hamburger = new Hamburger({
  size: Hamburger.SIZE_SMALL,
  stuffing: Hamburger.STUFFING_CHEESE
});
console.log("My hamburder", hamburger);

hamburger.addTopping(Hamburger.TOPPING_SAUCE);
hamburger.addTopping(Hamburger.TOPPING_SPICE);
//hamburger.removeTopping(Hamburger.TOPPING_SAUCE);

//console.log(hamburger.getSize());
hamburger.calculatePrice();

//console.log(hamburger.calculatePrice());
