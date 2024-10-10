window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi)
}

function calculateBmi() {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if (!height || isNaN(height) || height < 0) {
        result.innerText = "please provide a valid height";
        return;
    } else if (!weight || isNaN(weight) || weight < 0) {
        result.innerText = "please provide a valid weight";
        return;
    }

    const bmi = weight / (height * height).toFixed(2);
    const bmiCalculate = bmi.toFixed(2);

    if (bmiCalculate < 18.5) {
        result.innerText = `Under Weight: ${bmiCalculate}`;
    } else if (bmiCalculate >= 18.5 && bmiCalculate < 24.9) {
        result.innerText = `Normal: ${bmiCalculate}`;
    } else if (bmiCalculate >= 25 && bmiCalculate < 29.9) {
        result.innerText = `Over Weight: ${bmiCalculate}`;
    } else if (bmiCalculate >= 30 && bmiCalculate < 34.9) {
        result.innerText = `Obesity (Class I): ${bmiCalculate}`;
    } else if (bmiCalculate >= 35.5 && bmiCalculate < 39.9) {
        result.innerText = `Obesity (Class II): ${bmiCalculate}`;
    } else {
        result.innerText = `Extreme Obasity: ${bmiCalculate}`;
    }
}
