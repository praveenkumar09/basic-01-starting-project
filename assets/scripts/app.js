const defaultResult = 0;
let currentResult = defaultResult;


function add(){
    const result =  currentResult + parseInt(userInput.value);
    outputResult(result,currentResult + " + "+ userInput.value);
}

addBtn.addEventListener('click',add);