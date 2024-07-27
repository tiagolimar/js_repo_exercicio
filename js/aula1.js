/*
1 - Apresentação do layout da Calculadora
2 - Conceitos de bootstrap grid
2 - Um pouco mais sobre funções (parâmetros, retorno, chamada)
*/

function verificar(event) {
    event.preventDefault();
    let input = document.getElementById('numero');
    let display = document.getElementById('display');

    let value = input.value;

    let restoDaDivisao = value%2;

    if (restoDaDivisao == 0){
        display.innerHTML = "O número é par";
    }else{
        display.innerHTML = "O número é ímpar";
    }
}

function gerarTabuada(event){
    event.preventDefault();
    let input = document.getElementById('numero');
    let display = document.getElementById('display');
    let value = input.value;

    display.innerHTML = "";
    
    for (let index = 1 ; index <= 10 ; index++ ){
        display.innerHTML += `${index} x ${value} = ${index*value}<br>`;
    }
}