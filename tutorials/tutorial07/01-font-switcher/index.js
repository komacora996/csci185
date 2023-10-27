function makeBigger() {
   document.querySelector("div.content").className="bigger"
   document.querySelector("body").fontSize = "1000px"
   document.querySelector("h1").fontSize = "100px"
   document.querySelector("nav").fontSize = "100px"
};

function makeSmaller() {
   document.querySelector("div.content").className= "smaller"
   document.querySelector("body").fontSize = "20px"
   document.querySelector("h1").fontSize = "20px"
};



/*
Tips:
1. First, in the index.html file, add an onclick attribute to each button.
   The value of the attribute should be a call to the corresponding function
   (see class demos).

2. Then modify the body of the "makeBigger" and 
   "makeSmaller" functions (in between the curly braces)
   to target the body element and set it's font size.
*/
