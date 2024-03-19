const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

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
Fn to store operations log for the calc
*/
function writeToLog(operator,resultbeforeCalc,calcNumber,result){
    const logEntry ={
        operation : operator,
        prevResult : resultbeforeCalc,
        operand : calcNumber,
        result : result
    };
    logEntries.push(logEntry);
}

/*
Fn to add
*/
function add(){
    const userInputValue = getUserInput();
    const initialResult = currentResult;
    currentResult += userInputValue;
    createAndWriteDesc("+",initialResult,userInputValue,currentResult);
    writeToLog("ADD",initialResult,userInputValue,currentResult);
}

/*
Fn to subract
*/
function subract(){
    const userInputValue = getUserInput();
    const initialResult = currentResult;
    currentResult -= userInputValue;
    createAndWriteDesc("-",initialResult,userInputValue,currentResult);
    writeToLog("SUBRACT",initialResult,userInputValue,currentResult);
}

/*
Fn to multiply
*/
function multiply(){
    const userInputValue = getUserInput();
    const initialResult = currentResult;
    currentResult *= userInputValue;
    createAndWriteDesc("*",initialResult,userInputValue,currentResult);
    writeToLog("MULTIPLY",initialResult,userInputValue,currentResult);
}

/*
Fn to divide
*/
function divide(){
    const userInputValue = getUserInput();
    const initialResult = currentResult;
    currentResult /= userInputValue;
    createAndWriteDesc("/",initialResult,userInputValue,currentResult);
    writeToLog("DIVIDE",initialResult,userInputValue,currentResult);
}

/*
Event listeners for the app
*/
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);