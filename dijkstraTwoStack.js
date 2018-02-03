function interpreter(expression) {

    var operatorStack = [];
    var operandStack = [];
    var length = expression.length;
    for (var i = 0; i < length; i++) {
        if (expression[i] === '(') {
            continue;
        } else if (expression[i] === '+' || expression[i] === '*') {
            operatorStack.push(expression[i]);
        } else if (expression[i] === ')') {

            var operator = operatorStack.pop();
            var operand1 = operandStack.pop();
            var operand2 = operandStack.pop();

            switch (operator) {
                case "+":
                    operand1 = parseInt(operand1) + parseInt(operand2);
                    break;
                case "*":
                    operand1 = parseInt(operand1) * parseInt(operand2);
                    break;

            }
            operandStack.push(operand1);
        } else {
            operandStack.push(expression[i]);
        }

    }
    var result = operandStack.pop();
    console.log(result);

}

interpreter('1+((2+3)*(4*5)))');