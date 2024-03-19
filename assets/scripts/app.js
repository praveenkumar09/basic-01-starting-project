const defaultResult = 0;
let currentResult = defaultResult;

/*
Fn to get the user input
*/
function getUserInput(){
    return parseInt(userInput.value);
}

/*
Fn to display the result and the calculation log
*/
function createAndWriteDesc(operator,resultbeforeCalc, calcNumber,result){
    const calcDesc = `${resultbeforeCalc} ${operator} ${calcNumber}`;
    outputResult(result,calcDesc);
}

/*
Fn to add
*/
function add(){
    const userInputValue = getUserInput();
    const calcResult =  currentResult + userInputValue;
    createAndWriteDesc("+",currentResult,userInputValue,calcResult);
}

/*
Fn to subract
*/
function subract(){
    const userInputValue = getUserInput();
    const calcResult =  currentResult - userInputValue;
    createAndWriteDesc("-",currentResult,userInputValue,calcResult);
}

/*
Fn to multiply
*/
function multiply(){
    const userInputValue = getUserInput();
    const calcResult =  currentResult * userInputValue;
    createAndWriteDesc("*",currentResult,userInputValue,calcResult);
}

/*
Fn to divide
*/
function divide(){
    const userInputValue = getUserInput();
    const calcResult =  currentResult / userInputValue;
    createAndWriteDesc("/",currentResult,userInputValue,calcResult);
}

/*
Event listeners for the app
*/
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);