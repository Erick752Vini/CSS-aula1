function somar() {
    let num
    let num1
    num = parseInt(document.getElementById('1').value)
    num1 = parseInt(document.getElementById('2').value)
    document.getElementById("./resultado").innerText = num+num1
    console.log(num + num1)

} 

function multiplicar() {
    let num2
    let num3
    num2 = parseInt(document.getElementById('3').value)
    num3 = parseInt(document.getElementById('4').value)
    document.getElementById("./resultado2").innerText = num2 * num3
    console.log(num2 * num3)

} 

function subtrair() {
    let num4
    let num5
    num4 = parseInt(document.getElementById('5').value)
    num5 = parseInt(document.getElementById('6').value)
    document.getElementById("./resultado3").innerText = num4 - num5
    console.log(num4 - num5)

} 

function area() {
    let num6
    let num7
    num6 = parseInt(document.getElementById('7').value)
    num7 = parseInt(document.getElementById('8').value)
    document.getElementById("./resultado4").innerText = num6 * num7 / 2
    console.log(num6 * num7 / 2) 
}