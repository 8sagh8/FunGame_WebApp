const divGame = document.querySelector("#gamediv");


/**********creating Variables for all Posible Ans*******/
  let oneOptioN = document.querySelector("#optionOne");
  let twoOptioN = document.querySelector("#optionTwo");
  let threeOptioN = document.querySelector("#optionThree");
  let fourOptioN = document.querySelector("#optionFour");
  /*let fiveOptioN = document.querySelector("#optionFive");
  let sixOptioN = document.querySelector("#optionSix");
  let sevenOptioN = document.querySelector("#optionSeven");
  let eightOptioN = document.querySelector("#optionEight");
  let nineOptioN = document.querySelector("#optionNine");
*/
let xOne, yOne;
let xTwo, yTwo;
let xThree, yThree;
let xFour, yFour;
/*let xFive, yFive;
let xSix, ySix;
let xSeven, ySeven;
let xEight, yEight;
let xNine, yNine;
*/
/*************Setting Random First Position****************/
  const h = divGame.clientHeight;
  const w = divGame.clientWidth;

  let randomFirstPosition=()=>{

    xOne = Math.floor(Math.random() * (w - 75));
    yOne = Math.floor(Math.random() * (h - 75));
    oneOptioN.style.left = `${xOne}px`;
    oneOptioN.style.top = `${yOne}px`;

    xTwo = Math.floor(Math.random() * (w - 75));
    yTwo = Math.floor(Math.random() * (h - 75));
    twoOptioN.style.left = `${xTwo}px`;
    twoOptioN.style.top = `${yTwo}px`;

    xThree = Math.floor(Math.random() * (w - 75));
    yThree = Math.floor(Math.random() * (h - 75));
    threeOptioN.style.left = `${xThree}px`;
    threeOptioN.style.top = `${yThree}px`;
    
    xFour = Math.floor(Math.random() * (w - 75));
    yFour = Math.floor(Math.random() * (h - 75));    
    fourOptioN.style.left = `${xFour}px`;
    fourOptioN.style.top = `${yFour}px`;
/*
    xFive = Math.floor(Math.random() * (w - 75));
    yFive = Math.floor(Math.random() * (h - 75));    
    fiveOptioN.style.left = `${xFive}px`;
    fiveOptioN.style.top = `${yFive}px`;
    
    xSix = Math.floor(Math.random() * (w - 75));
    ySix = Math.floor(Math.random() * (h - 75));
    sixOptioN.style.left = `${xSix}px`;
    sixOptioN.style.top = `${ySix}px`;
  
    xSeven = Math.floor(Math.random() * (w - 75));
    ySeven = Math.floor(Math.random() * (h - 75));
    sevenOptioN.style.left = `${xSeven}px`;
    sevenOptioN.style.top = `${ySeven}px`;

    xEight = Math.floor(Math.random() * (w - 75));
    yEight = Math.floor(Math.random() * (h - 75));
    eightOptioN.style.left = `${xEight}px`;
    eightOptioN.style.top = `${yEight}px`;
 
    xNine = Math.floor(Math.random() * (w - 75));
    yNine = Math.floor(Math.random() * (h - 75));
    nineOptioN.style.left = `${xNine}px`;
    nineOptioN.style.top = `${yNine}px`;
  */
  }

  window.addEventListener("load", randomFirstPosition);
  fourOptioN.addEventListener("click", randomFirstPosition);


/*************Setting Random First Position****************/

let moveElement=()=>{

  xOne += 1;
  yOne += 1;

  if(yOne >= 425){
    xOne = Math.floor(Math.random() * (w - 75));
    yOne = Math.floor(Math.random() * (h - 75));
  }

  if(xOne >= 1150){
    xOne = Math.floor(Math.random() * (w - 75));
    yOne = Math.floor(Math.random() * (h - 75));
  }

  oneOptioN.style.left = `${xOne}px`;
  oneOptioN.style.top = `${yOne}px`;
//////////////////////////////////////
  xTwo += 1;
  yTwo += 1;

  if(yTwo >= 425){
    xTwo = Math.floor(Math.random() * (w - 75));
    yTwo = Math.floor(Math.random() * (h - 75));
  }

  if(xTwo >= 1150){
    xTwo = Math.floor(Math.random() * (w - 75));
    yTwo = Math.floor(Math.random() * (h - 75));
  }

  twoOptioN.style.left = `${xTwo}px`;
  twoOptioN.style.top = `${yTwo}px`;
///////////////////////////////////
  xThree += 1;
  yThree += 1;

  if(yThree >= 425){
    xThree = Math.floor(Math.random() * (w - 75));
    yThree = Math.floor(Math.random() * (h - 75));
  }

  if(xThree >= 1150){
    xThree = Math.floor(Math.random() * (w - 75));
    yThree = Math.floor(Math.random() * (h - 75));
  }

  threeOptioN.style.left = `${xThree}px`;
  threeOptioN.style.top = `${yThree}px`;
///////////////////////////////////
  xFour += 1;
  yFour += 1;

  if(yFour >= 425){
    xFour = Math.floor(Math.random() * (w - 75));
    yFour = Math.floor(Math.random() * (h - 75));
  }

  if(xFour >= 1150){
    xFour = Math.floor(Math.random() * (w - 75));
    yFour = Math.floor(Math.random() * (h - 75));
  }

  fourOptioN.style.left = `${xFour}px`;
  fourOptioN.style.top = `${yFour}px`;

  ///////////////////////////////////
 /*
  xFive += 1;
  yFive += 1;

  if(yFive >= 425){
    xFive = Math.floor(Math.random() * (w - 75));
    yFive = Math.floor(Math.random() * (h - 75));
  }

  if(xFive >= 1150){
    xFive = Math.floor(Math.random() * (w - 75));
    yFive = Math.floor(Math.random() * (h - 75));
  }

  fiveOptioN.style.left = `${xFive}px`;
  fiveOptioN.style.top = `${yFive}px`;

  ///////////////////////////////////
  xSix += 1;
  ySix += 1;

  if(ySix >= 425){
    xSix = Math.floor(Math.random() * (w - 75));
    ySix = Math.floor(Math.random() * (h - 75));
  }

  if(xSix >= 1150){
    xSix = Math.floor(Math.random() * (w - 75));
    ySix = Math.floor(Math.random() * (h - 75));
  }

  sixOptioN.style.left = `${xSix}px`;
  sixOptioN.style.top = `${ySix}px`;

  ///////////////////////////////////
  xSeven += 1;
  ySeven += 1;

  if(ySeven >= 425){
    xSeven = Math.floor(Math.random() * (w - 75));
    ySeven = Math.floor(Math.random() * (h - 75));
  }

  if(xSeven >= 1150){
    xSeven = Math.floor(Math.random() * (w - 75));
    ySeven = Math.floor(Math.random() * (h - 75));
  }

  sevenOptioN.style.left = `${xSeven}px`;
  sevenOptioN.style.top = `${ySeven}px`;

  ///////////////////////////////////
  xEight += 1;
  yEight += 1;

  if(yEight >= 425){
    xEight = Math.floor(Math.random() * (w - 75));
    yEight = Math.floor(Math.random() * (h - 75));
  }

  if(xEight >= 1150){
    xEight = Math.floor(Math.random() * (w - 75));
    yEight = Math.floor(Math.random() * (h - 75));
  }

  eightOptioN.style.left = `${xEight}px`;
  eightOptioN.style.top = `${yEight}px`;

  ///////////////////////////////////
  xNine += 1;
  yNine += 1;

  if(yNine >= 425){
    xNine = Math.floor(Math.random() * (w - 75));
    yNine = Math.floor(Math.random() * (h - 75));
  }

  if(xNine >= 1150){
    xNine = Math.floor(Math.random() * (w - 75));
    yNine = Math.floor(Math.random() * (h - 75));
  }

  nineOptioN.style.left = `${xNine}px`;
  nineOptioN.style.top = `${yNine}px`;
*/
}

setInterval(moveElement, 20);

