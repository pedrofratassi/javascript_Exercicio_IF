window.document.getElementById('converter').onclick = mudarTemperatura;
window.document.getElementById('limpar').onclick = clear;

function mudarTemperatura(){
   
    var celsius = document.getElementById("celsius").value
    var fahrenheit  = document.getElementById("fahrenheit").value

    if(isNaN(celsius) || isNaN(fahrenheit)){
        alert("Somente números podem ser digitados!")
        return
    } else if (celsius === ''){
        celsius = (parseFloat(fahrenheit - 32)) / 1.8
    } else if(fahrenheit === ''){
        fahrenheit = (parseFloat(celsius * 1.8)) + 32
    }
// (parseFloat(celsius - 32)) * 1.8
// celsius = (parseFloat(fahrenheit * 1.8)) + 32

    window.document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(1)
    window.document.getElementById("celsius").value = parseFloat(celsius).toFixed(1)
}

function clear(){
   
    window.document.getElementById("fahrenheit").value = ""
    window.document.getElementById("celsius").value = ""
}
