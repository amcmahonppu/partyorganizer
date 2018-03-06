var partyorganizer = (function(){
  var cart = [];
  var partyType = null;
  var numberOfPeople = null;
  var numberOfVegPeople = null;
  var foodType = null;
  var pounds = null;
  var foodPrice = null;
  var drinkPrice = null;
  var drinkType = null;
  var drinkAmount = null;
  var amountToBuy = null;
  var foodAmount =  null;
  var discountName = null;
  var discountPrice = null;
  var discountCodes = [{
    name: "PointPark",
    discount: .20
  }];
  var drinkOptions = [{
     name: "Water",
     price: 1.99
   }, {
     name: "Coconut Water",
     price: 2.99
   }, {
     name: "Coca Cola",
     price: 1.99

   }, {
     name: "Mountain Dew",
     price: 1.99

   }, {
     name: "Gatorade",
     price: 2.99

   }, {
     name: "Monster",
     price: 3.99
   }];

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
  },{
    name: "Black Bean Burger",
    price: 5.99
  },{
    name: "Tofu",
    price: 2.50
  },{
    name: "Mac and Cheese",
    price: 7.50
  }];

  function setDiscountName(dn){
    discountName = dn;
  }

  function setDiscountPrice(){
    for(var i = 0; i<discountCodes.length; i++){
      if(discountName === discountCodes[i].name){
        discountPrice = discountCodes[i].price;
      }
    }
  }

  function setPartyType(pt){
    partyType = pt;
  }

  function setFoodAmount(pd){
    foodAmount = pd;
  }

  function setDrinkAmount(dr){
    drinkAmount = dr;
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
        foodPrice = foodOptions[i].price;
      }
    }
  }

  function setDrinkPrice(){
    for(var i = 0; i<drinkOptions.length; i++){
      if(drinkType === drinkOptions[i].name){
        drinkPrice = drinkOptions[i].price;
      }
    }
  }

  function addToCart(){
      cart.push({
        foodType: foodType,
        foodAmount: foodAmount,
        foodPrice: foodPrice,
        drinkType: drinkType,
        drinkAmount: drinkAmount,
        drinkPrice: drinkPrice,
        discountPrice: discountPrice
      });
    foodType = null;
    foodAmount = null;
    foodPrice = null;
    drinkType = null;
    drinkAmount = null;
    drinkPrice = null;
    notify();
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

  function resetCart(cart){
    cart = null;
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
    setDrinkAmount: setDrinkAmount,
    setDrinkType: setDrinkType,
    setDrinkPrice: setDrinkPrice,
    setDiscountName: setDiscountName,
    setDiscountPrice: setDiscountPrice,
    setPrice: setPrice,
    addToCart: addToCart,
    getCart: getCart,
    listen: listen
  };
})();
