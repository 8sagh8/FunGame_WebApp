let playbut = document.querySelector("#press");


let textf;
let agef;

let fanctionplay=()=>
{
  textf = document.querySelector("#textfield").value;

  if (textf == 0)
    alert(`Who are you?`);

  else {
    agef = document.querySelector("#agefield").value;

    if (agef == "error")    
    
      alert(`Age is mendatory to start the game`);

    else {
      window.location.href=`level1.html`;
    }

  }

localStorage.fullName = textf;
localStorage.fullAge = agef;

}

playbut.addEventListener("click", fanctionplay);


// Check browser support for localStorage





