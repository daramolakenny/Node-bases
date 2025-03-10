function sum(a,b) {
    return a + b;
}

function divide(a,b){
    if(b === 0){
        throw new Error('Divide by Zero is not allowed');
    }

    return a / b;
}

function multiply(a,b){
    return a*b;
}

export default {
    sum, divide, multiply,
}