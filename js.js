function getPin() {
    const Pin = Math.round((Math.random() * 10000));
    return Pin;
}


document.getElementById('generete-pin').addEventListener('click', function () {
    const Pin = getPin();
    const pinLength = Pin + '';
    if (pinLength.length != 4) {
        return getPin();
    }

    const inputvalue = document.getElementById('input-gen');
    inputvalue.value = Pin;

});

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    // console.log(number);
    const inputElement = document.getElementById('input-Field');
    const previousElement = inputElement.value;
    if (isNaN(number)) {
        if (number == 'C') {
            inputElement.value = '';
        }
        else if (number == '<') {
            const digit = previousElement.split('');
            digit.pop();
            const remining = digit.join('');
            inputElement.value = remining;
        }

    }
    else {

        inputElement.value = previousElement + number
    }
})

document.getElementById('btn-submit').addEventListener('click', function () {
    const verifyText = document.getElementById('input-gen');
    const varifyValue = verifyText.value;

    const typedElement = document.getElementById('input-Field');
    const typedValue = typedElement.value;
    const successText = document.getElementById('success');
    const failureText = document.getElementById('failure');
    if (varifyValue == typedValue) {

        successText.style.display = 'block';
        failureText.style.display = 'none';
    }
    else {

        successText.style.display = 'none';
        failureText.style.display = 'block';
    }
})