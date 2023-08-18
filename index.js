const btn = document.querySelector('#btn')
const R1 = document.querySelector('#R1')
const R2 = document.querySelector('#R2')
const notify = document.querySelector('#alert')

btn.addEventListener('click', () => {
    const weight = document.querySelector('#weight').value
    const height = document.querySelector('#height').value
    let msg = 'which means You are'

    console.log(weight, height)

    if (weight == '' || height == '') {
        notify.textContent = 'All Fields are required!'
        notify.style.color = 'red'
        return
    }
    else if (!isNaN(weight) && !isNaN(height)) {
        const BMI = BMI_Calculator(weight, height)
        R1.textContent = BMI

        if (BMI <= 18.4) R2.textContent = `${msg} "under weight"`
        else if (BMI >= 18.5 && BMI <= 24.9) R2.textContent = `${msg} "normal weight"`
        else if (BMI >= 25 && BMI <= 29.9) R2.textContent = `${msg} "overweight"`
        else if (BMI >= 30) R2.textContent = `${msg} "obese"`

        notify.textContent = ''
    }
    else {
        
        notify.textContent = 'Please enter valid input!'
        notify.style.color = 'red'
        return
    }

})

function BMI_Calculator(weight, height) {
    return (weight / ((height * height) / 10000)).toFixed(1) // bmi unit kg/m^2
}