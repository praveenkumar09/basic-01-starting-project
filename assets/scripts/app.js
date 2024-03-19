const defaultResult = 0;
let currentResult = defaultResult;


function getUserInput(){
    return parseInt(userInput.value);
}

function createAndWriteDesc(operator,resultbeforeCalc, calcNumber,result){
    const calcDesc = `${resultbeforeCalc} ${operator} ${calcNumber}`;
    outputResult(result,calcDesc);
}


function add(){
    const userInputValue = getUserInput();
    const calcResult =  currentResult + userInputValue;
    createAndWriteDesc("+",currentResult,userInputValue,calcResult);
}

function subract(){
    const userInputValue = getUserInput();
    const calcResult =  currentResult - userInputValue;
    createAndWriteDesc("-",currentResult,userInputValue,calcResult);
}

function multiply(){
    const userInputValue = getUserInput();
    const calcResult =  currentResult * userInputValue;
    createAndWriteDesc("*",currentResult,userInputValue,calcResult);
}

function divide(){
    const userInputValue = getUserInput();
    const calcResult =  currentResult / userInputValue;
    createAndWriteDesc("/",currentResult,userInputValue,calcResult);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);