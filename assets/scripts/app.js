const defaultResult = 0;
let currentResult = defaultResult;


function getUserInput(){
    return parseInt(userInput.value);
}

function createAndWriteDesc(operator,resultbeforeCalc, calcNumber){
    const calcDesc = `${resultbeforeCalc} ${operator} ${calcNumber}`;
    return calcDesc;
}


function add(){
    const userInputValue = getUserInput();
    const calcResult =  currentResult + userInputValue;
    outputResult(calcResult,createAndWriteDesc("+",currentResult,userInputValue));
}

function subract(){
    const userInputValue = getUserInput();
    const calcResult =  currentResult - userInputValue;
    outputResult(calcResult,createAndWriteDesc("-",currentResult,userInputValue));
}

function multiply(){
    const userInputValue = getUserInput();
    const calcResult =  currentResult * userInputValue;
    outputResult(calcResult,createAndWriteDesc("*",currentResult,userInputValue));
}

function divide(){
    const userInputValue = getUserInput();
    const calcResult =  currentResult / userInputValue;
    outputResult(calcResult,createAndWriteDesc("/",currentResult,userInputValue));
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);