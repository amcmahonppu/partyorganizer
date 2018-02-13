var partyorganizer = (function(){

  var partyType = null;
  var numberOfPeople = null;
  var numberOfVegPeople = null;
  var foodType = null;
  var pounds = null;
  var drinkType = null;
  var amountToBuy = null;

  function setPartyType(pt){
    partyType = pt;
  }

  function setFoodType(ft){
    foodType = ft;
  }

  function setDrinkType(dt){
    drinkType = dt;
  }

  function addToCart(){


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

  function resetCart(totalTable){
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
      listeners[i](totalTable);
    }
  }

  return {
    setPartyType: setPartyType,
    resetForm: resetForm,
    resetCart, resetCart,
    listen: listen
  };
})();
