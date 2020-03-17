var discount = 0;

function valFirstName(){
  var uName = document.getElementById("fname").value;
  var regex = /^\w{2,15}$/;
  updateVisual("fname");
  return(
    compare((regex.test(uName)), "firstPrompt", "First names must be from 2 and 15 characters")
  );
}

function valLastName(){
  var uName = document.getElementById("lname").value;
  var regex = /^\w{2,25}$/;
  updateVisual("lname");
  return(
    compare((regex.test(uName)), "lastPrompt", "Last names must be from 2 and 25 characters")
  );
}

function valPhone(){
  var uPhone = document.getElementById("phone").value;
  var regex = /^\d{3}-\d{3}-\d{4}$/;
  updateVisual("phone");
  return(
    compare((regex.test(uPhone)), "pPrompt", "Phone number should be in ###-###-#### format")
  );
}

function valQuant(){
  var uQuant = document.getElementById("quantity").value;
  var regex = /^\d{1,2}$/;
  updateVisual("quantity");
  return(
    compare((regex.test(uQuant) && (uQuant>0) && (uQuant<100)),"qPrompt", "You can only order from 1-99 teas")
  )
}

//--- Functions associated w/ other Functions -----------------

function updateVisual(elem){
  document.getElementById(elem).style = "color:#fff;"
}

function compare(bool, inner, phrase){
  if(bool){
    document.getElementById(inner).innerHTML = "<img src=\"images/check.png\">";
    return (true);
  }else{
    document.getElementById(inner).innerHTML = "<img src=\"images/cross.png\"> "+phrase;
    return (false);
  }
}

//--- Calculates Order ------------------------------------------

function calcOrder(){
  if(valFirstName() && valLastName() &&valPhone() && valQuant()){
    const TAXRATE = 0.085;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var uQuant = document.getElementById("quantity").value;
    var cost = document.getElementById("cost").value;
    var extCost = uQuant*cost;

    for(i=1; i<=(uQuant/10); i++){
      if(i<=4){
        discount++;
      }
    }
    var off = discount*extCost/10; //discount is calculated before taxes
    document.getElementById("disc").value = "$"+off.toFixed(2);

    var taxAmt = extCost*TAXRATE;
    var orderCost = extCost+taxAmt-off.toFixed(2);
    document.getElementById("costExt").value = "$"+orderCost.toFixed(2);

    alert("Hello "+fname+" "+lname+", Your order of "+uQuant+" tea(s) totals $"+orderCost.toFixed(2)+"\n\nYour discounts totaled to $"+off.toFixed(2));
  }else{
    document.getElementById("costExt").value="";
    alert("There was an error with your input.\nPlease correct it an order again.");
  }
  discount = 0;
}
