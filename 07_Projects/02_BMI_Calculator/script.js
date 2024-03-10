const calButton = document.querySelector('#calButton')

calButton.addEventListener( 'click',(e) => {
    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value
    const result = document.getElementById('result')
    if(height <= 0 ){
        result.innerText = "Enter a valid height"
    }
    else if(weight <= 0 ){
        result.innerText = "Enter a valid weight"
    }
    else{
        result.innerText = (weight / (height**2)).toFixed(2)
    }
} )
