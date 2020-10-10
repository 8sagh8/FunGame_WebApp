prompt("Name: " + localStorage.fullName + " Age: " + localStorage.fullAge);
prompt("Scores: " + localStorage.fullScore + " Hits: " + localStorage.fullHits + " Misses: " +
    localStorage.fullMisses);

let loadReport = () => {
    document.querySelector("#pName").innerHTML = localStorage.fullName;

    document.querySelector("#pAge").innerHTML = localStorage.fullAge;

    document.querySelector("#pScore").innerHTML = localStorage.fullScore;

    document.querySelector("#pHits").innerHTML = localStorage.fullHits;

    document.querySelector("#pMisses").innerHTML = localStorage.fullMisses;
}

window.addEventListener("load", loadReport);