var partyorganizer = (function(){
  var cart = [];
  var partyType = null;
  var numberOfPeople = null;
  var numberOfVegPeople = null;
  var foodType = null;
  var pounds = null;
  var price = null;
  var drinkType = null;
  var amountToBuy = null;
  var foodAmount =  null;
  var foodOptions = [{
    name: "Beef",
    price: 8.99
  }, {
    name: "Chicken",
    price: 5.99
  }, {
    name: "Pizza",
    price: 6.99
  }, {
    name: "Hot Sausage",
    price: 9.99
  }, {
    name: "Pasta",
    price: 4.99
  }, {
    name: "Hot Dog",
    price: 3.99
  }, {
    name: "Steak",
    price: 13.99
  }, {
    name: "Ribs",
    price: 14.99
  }];

  function setPartyType(pt){
    partyType = pt;
  }

  function setFoodAmount(pd){
    foodAmount = pd;
  }

  function setFoodType(ft){
    foodType = ft;
  }

  function setDrinkType(dt){
    drinkType = dt;
  }

  function setPrice(){
    for(var i = 0; i<foodOptions.length; i++){
      if(foodType === foodOptions[i].name){
        price = foodOptions[i].price;
      }
    }
  }

  function addToCart(){
    cart.push({
      foodType: foodType,
      foodAmount: foodAmount,
      price: setPrice()
    });
    foodType = null;
    foodAmount = null;
    price = null;
  }

  function getCart(){
    return cart;
    notify();
  }
  function removeItem() {
    // notify all the listeners (which update the views)
    notify();
  }

  function resetForm(){
    partyType = null;
    numberOfPeople = null;
    numberOfVegPeople = null;
    foodType = null;
    pounds = null;
    drinkType = null;
    amountToBuy = null;
    notify();
  }

  function resetCart(table){
    totalTable = null;
    notify();
  }

  var listeners = [];

  function listen(cb) {
    // collect them in the listeners array
    listeners.push(cb);
  }

  function notify() {
    // iterate through the array and call the listen callback function
    for (var i = 0; i < listeners.length; i++) {
      // call the function
      listeners[i](cart);
    }
  }

  return {
    setPartyType: setPartyType,
    resetForm: resetForm,
    resetCart: resetCart,
    setFoodType: setFoodType,
    setFoodAmount: setFoodAmount,
    setPrice: setPrice,
    addToCart: addToCart,
    getCart: getCart,
    listen: listen
  };
})();
