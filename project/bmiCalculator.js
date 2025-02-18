let form = document.querySelector('form');
let result = document.querySelector('#result')
let messageBox=document.getElementById('Message')
let bmi;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let height = parseFloat(document.querySelector('#height').value);
    console.log(typeof height);
    
    let weight = parseInt(document.querySelector('#weight').value);
    
    let heightInCm=height*30.48
    console.log(typeof heightInCm);
    
    // console.log(height);
    // console.log(typeof height);

    if (height <= 0 || height === '' || isNaN(height)) {
        console.log("Please enter correct height");

    }
    else if (weight < 0 || weight === '' || isNaN(weight)) {
        console.log("Please enter correct weight");

    }
    else {
        bmi = (weight / ((heightInCm / 100) * (heightInCm / 100))).toFixed(2);
        console.log(bmi);
    }

    result.innerHTML = `${bmi}`

    let message;
    switch (true) {
        case bmi<=16.0:
            message="Severly Underweight"
            
            break;
        case bmi>16.0 && bmi<=18.4:
            message="Underweight"
            
            break;
        case bmi>18.4 && bmi<=25:
            message="Normal"
            
            break;
        case bmi>25 && bmi<=30:
            message="Overweight"
            
            break;
        case bmi>30 && bmi<=35:
            message="Moderately Obese"
            
            break;
        case bmi>35 && bmi<=40:
            message="Severly Obese"
            
            break;
        case bmi>40:
            message="Morbidly Obese"
            
            break;
    }
    messageBox.innerText=message
    

})