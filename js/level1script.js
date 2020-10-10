/************* Time logic********************* */
const spantime = document.querySelector("#ttime");

let timer = parseInt(spantime.innerHTML);
let intervalRef;

const countDown = () => {
    timer--;

    spantime.innerHTML = timer;

    if (timer <= 0) {
        clearInterval(intervalRef);
        window.location.href = 'level2.html';
    }
}
intervalRef = setInterval(countDown, 1000);


/**************Random Numbers Calculations*************** */

/***initializing Correct Answer Variable as Global***/
let answerValue = 0;
/*****all containers****/

let oneValue = document.querySelector("#valueOne");
let twoValue = document.querySelector("#valueTwo");

let oneOption = document.querySelector("#optionOne");
let twoOption = document.querySelector("#optionTwo");
let threeOption = document.querySelector("#optionThree");
let fourOption = document.querySelector("#optionFour");


/***Random Question and Answer Function */
const randomQuestionNumbers = () => {
    /*****all containers****/

    let valueO = Math.floor(Math.random() * 6);
    let valueT = Math.floor(Math.random() * 6);

    /******Calulations****/
    oneValue.innerHTML = valueO;
    twoValue.innerHTML = valueT;

    answerValue = valueO + valueT;


    /*************kill Duplicate Random Numbers****************/

    let randomNumArray = [];

    for (let i = 0; i < 3; i++) {
        let valueLand = Math.floor(Math.random() * 11);
        randomNumArray.push(`${valueLand}`);

        console.log(randomNumArray[i]);

        let j = i - 1;

        /********compare index "0" with correct answer*********** */
        while (randomNumArray[0] == answerValue) {
            randomNumArray.pop();
            let valueNewL = Math.floor(Math.random() * 10);
            randomNumArray.push(`${valueNewL}`);
        }
        /*********compare all arrays num************************ */
        for (j; j >= 0; j--) {
            console.log(`for ==> i = ${i} j = ${j}`);
            while (randomNumArray[i] == randomNumArray[j] || randomNumArray[i] == answerValue) {
                console.log(`while ==> i = ${i} j = ${j}`);

                console.log(`before pop ${randomNumArray[i]}`);
                randomNumArray.pop();
                console.log(`before pop ${randomNumArray[i]}`);
                let valueNewL = Math.floor(Math.random() * 11);
                randomNumArray.push(`${valueNewL}`);
                console.log(`after push ${randomNumArray[i]}`);
            }
        }
    }


    /*****Insert numbers at HTML**********/

    oneOption.innerHTML = randomNumArray[0];
    twoOption.innerHTML = randomNumArray[1];
    threeOption.innerHTML = randomNumArray[2];
    fourOption.innerHTML = answerValue;
    /*fiveOption.innerHTML = randomNumArray[3];
  sixOption.innerHTML = randomNumArray[4];
  sevenOption.innerHTML = randomNumArray[5];
  eightOption.innerHTML = randomNumArray[6];
  nineOption.innerHTML = randomNumArray[7];
*/
}


/********AddEventListener*************/
window.addEventListener("load", randomQuestionNumbers);
oneOption.addEventListener("click", randomQuestionNumbers);
twoOption.addEventListener("click", randomQuestionNumbers);
threeOption.addEventListener("click", randomQuestionNumbers);
fourOption.addEventListener("click", randomQuestionNumbers);
/*  fiveOption.addEventListener("click", randomQuestionNumbers);
  sixOption.addEventListener("click", randomQuestionNumbers);
  sevenOption.addEventListener("click", randomQuestionNumbers);
  eightOption.addEventListener("click", randomQuestionNumbers);
  nineOption.addEventListener("click", randomQuestionNumbers);

 
*/


/************Click Calculation***************/
let iClick = 0;
let totalMiss = 0;
let totalHits = 0;

/************Hits Calculation***************/

let spanHits = document.querySelector("#hitsSpan");

const hitCalculation = () => {

    totalHits += 1;
    spanHits.innerHTML = totalHits;

    let scoretoUpdate = parseInt(document.querySelector("#scoreSpan").innerHTML);

    scoretoUpdate += 100;

    scoreSpan.innerHTML = scoretoUpdate;

    //LOCAL STORAGE

    localStorage.fullScore = scoretoUpdate;
    localStorage.fullHits = totalHits;

}

fourOption.addEventListener("click", hitCalculation);


/************Misses Calculation***************/

let spanMiss = document.querySelector("#missSpan");

const missCalculation = () => {
    totalMiss = totalMiss + 1;

    if (totalMiss == 6) {
        window.location.href = `report.html`;
    } else spanMiss.innerHTML = totalMiss;

    let scoretoUpdate = parseInt(document.querySelector("#scoreSpan").innerHTML);

    if (scoretoUpdate > 0)
        scoretoUpdate -= 100;

    else scoretoUpdate = 0;

    scoreSpan.innerHTML = scoretoUpdate;

    //LOCAL STORAGE

    localStorage.fullScore = scoretoUpdate;
    localStorage.fullMisses = totalMiss;
}

oneOption.addEventListener("click", missCalculation);
twoOption.addEventListener("click", missCalculation);
threeOption.addEventListener("click", missCalculation);
/*fiveOption.addEventListener("click", missCalculation);
sixOption.addEventListener("click", missCalculation);
sevenOption.addEventListener("click", missCalculation);
eightOption.addEventListener("click", missCalculation);
nineOption.addEventListener("click", missCalculation);

*/