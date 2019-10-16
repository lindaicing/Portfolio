window.onload = function(){
  display();
  getLocation();
  FindQuote();
}

function display() {
  var today = new Date();
  var h = today.getHours();
  hDisplay = h;
  ampm = "AM";
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);

  if(h>=13){
    hDisplay = h-12;
    ampm = "PM";
  }else{
    ampm = "AM";
  }

  document.getElementById("timed").innerHTML = hDisplay + ":" + m + ":" + s + " "+ampm;
  var t = setTimeout(function(){display()}, 500);

  var a;
  if((ampm == "AM")&&(hDisplay<=8)){ //ambience calculator
    a = (8-hDisplay)/16;//before 8am, max = 0.5 opacity
  }else if((ampm == "PM")&&(hDisplay>=8)){
    a = hDisplay/24; //after 10pm, max = 0.5 opacity
  }else{
    a = 0;
  }
  document.getElementById("ambience").style = "background: rgba(0, 0, 0, "+a.toString()+")";
}

function checkTime(i) {//adjusts for 10 display
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//----------------------------------------------------------------------------
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("loc").innerHTML = "Geolocation isn't supported by this browser.";
  }
}

function showPosition(position) {
  document.getElementById("loc").innerHTML = "Coordinates - Latitude: " + position.coords.latitude.toFixed(2) +
  " Longitude: " + position.coords.longitude.toFixed(2);
}

//----------------------------------------------------------------------------

function FindQuote() {
  var quotionary = ['Bike whenever possible to improve excise habits and to cut car emissions.',
          'Try beeswax wrap instead of plastic wrap.', 'Use a resusable bag.', 'Bring a reusable water bottle.',
          'Choose chicken over lamb or beef.','Fix leaky pipes as soon as possible.'
  ];

  var seachTerms = ['biking is good for health and environment', 'beeswax wrap',
  'reusable bags', 'reusable water bottles', 'sustainability of chicken and red meats', 'ways to save water'];

 var random = Math.floor(Math.random() * quotionary.length);
 var quote = quotionary[random];
 var search = seachTerms[random];

  document.getElementById("quoteID").innerHTML = quote;
  document.getElementById("searchID").onclick = function () {
    window.open("https://www.google.com/search?q="+search);
  }
  document.getElementById("imgp").innerHTML = "<img src='Images/"+(random+1).toString()+".png' alt='image'>";
}
