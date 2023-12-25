let displayNumber = document.getElementById('displayNumber');
let button = document.querySelectorAll('.button');
let topDisplayBtn = document.querySelector('.topNumber H6')


button.forEach(btn =>{
        btn.addEventListener('click', () =>{
            let buttonText = btn.value;
            if(buttonText === "D"){
                let lastChild = displayNumber.lastChild;
                displayNumber.removeChild(lastChild);
            }else if(buttonText === 'C'){
                displayNumber.textContent = 0;
                topDisplayBtn.textContent = ''
            }
            else if(buttonText === '='){
                let finalNum = displayNumber.textContent;
                let result = calculate(finalNum);
                topDisplayBtn.textContent = finalNum;
                displayNumber.textContent = result;
            }
            else{
                let textNode = document.createTextNode(buttonText);
                displayNumber.appendChild(textNode);
            }
        })
})
        function calculate(expression) {
        let tokens = expression.split(/(\+|\-|\*|\/)/);
        let result = 0;
        let currentOperator = '+';

        tokens.forEach(token => {
            switch (token.trim()) {
                case '+':
                case '%':
                case '-':
                case '*':
                case '/':
                    currentOperator = token.trim();
                    break;
                default:
                    let num = parseFloat(token);
                    if (!isNaN(num)) {
                        if (currentOperator === '-') {
                            result -= num;
                        } else {
                            switch (currentOperator) {
                                case '+':
                                    result += num;
                                    break;
                                case '%':
                                    result % num;
                                    break;
                                case '-':
                                    result -= num;
                                    break;
                                case '*':
                                    result *= num;
                                    break;
                                case '/':
                                    result /= num;
                                    break;
                                default:
                                    // Operator tidak terdefinisi, tambahkan angka
                                    result += num;
                                    break;
                            }
                        }
                    }
            }
        });
                return result;
        }




// dark mode


let icon = document.getElementById('icon');
let mode = document.querySelector('.darkLight');
let calculatorCtr = document.querySelector('.calculatorCtr')


mode.addEventListener('click', () =>{
    icon.classList.toggle('bi-moon-stars');
    if(icon.classList.contains('bi-moon-stars')){
        document.body.style.backgroundColor = "#fff";
        calculatorCtr.style.backgroundColor = "#ececec";
        displayNumber.style.color = "#1f1f1f";
    }else{
        document.body.style.backgroundColor = "#7e7e7e"    
        calculatorCtr.style.backgroundColor = "#1b1b1b";
        displayNumber.style.color = "#fff";
    }
})
