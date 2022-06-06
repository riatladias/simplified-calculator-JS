function calcular() {
    let txtn1 = document.getElementById('txtn1')
    let txtn2 = document.getElementById('txtn2')
    let res = document.getElementById('res')
    let seltab = document.querySelector('#tab')

    if (txtn1.value.length == 0 || txtn2.value.length == 0) {
        alert('Falta informações, tente novamente!')

    } else {
        let valorsel = Number(seltab.value)
        let num1 = Number(txtn1.value)
        let num2 = Number(txtn2.value)
        
        if (valorsel == 1) {
            res.innerHTML = ` ${num1} + ${num2} = ${num1 + num2}`
            
        } else if (valorsel == 2) {
            res.innerHTML = ` ${num1} - ${num2} = ${num1 - num2}`

        } else if (valorsel == 3) {
            res.innerHTML = ` ${num1} / ${num2} = ${num1 / num2}`

        } else if (valorsel == 4) {
            res.innerHTML = ` ${num1} x ${num2} = ${num1 * num2}`

        } else if (valorsel == 5) {
            let media = (num1 + num2) / 2
            res.innerHTML = `A média dos dois valores é ${media}`
        }
    }
}
