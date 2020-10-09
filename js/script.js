
const clicBut = document.querySelector("#butClick");
let audMy = document.querySelector("#myAudio");
  let i = 1;

 let playMus =()=>{
   audMy.play();
 } 

 window.addEventListener("load", playMus);

clicBut.addEventListener("click", ()=>{

  if (i/2 != 0) 
    audMy.pause();

  else {
    i += 1;
    audMy.play();
  }
});



