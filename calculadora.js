let expressao = document.getElementById('expressao')
let resposta = document.getElementById('resposta')
let memoria = ['','','']

function digitoPressionado(num){
    memoria[0] += num
    console.log(memoria)
    expressao.innerHTML = memoria[2]+memoria[1]+memoria[0]

}
function operacao(sinal){
    memoria[1] += sinal
    memoria[2] = (+memoria[0]).toFixed(2)
    memoria[0] = ''
    expressao.innerHTML = memoria[2]+memoria[1]+memoria[0]
}
function calcula(){
    let n1 = +memoria[2]
    let n2 = +memoria[0]
    switch(memoria[1]){
        case "+":
            resposta.innerHTML = (n1+n2).toFixed(2)
            memoria = ['','','']
            memoria = [n1+n2,'','']
            break
        case "-":
            resposta.innerHTML = (n1-n2).toFixed(2)
            memoria = ['','','']
            memoria = [n1-n2,'','']
            break
        case "*":
            resposta.innerHTML = (n1*n2).toFixed(2)
            memoria = ['','','']
            memoria = [n1*n2,'','']
            break
        case "/":
            resposta.innerHTML = (n1/n2).toFixed(2)
            memoria = ['','','']
            memoria = [n1/n2,'','']
            break
    }
}
function limpaTela(){
    memoria = ['','','']
    expressao.innerHTML = memoria[2]+memoria[1]+memoria[0]
    resposta.innerHTML = ''
}
console.log(memoria)

    