let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
let display = document.getElementById('display');

function imprimir(valor){
    display.innerHTML = valor;
}

function verificacao(valor){
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);

    if (Number.isNaN(num1) || Number.isNaN(num2)){
        alert('Por favor, insira dois números válidos.');
    }else{
        imprimir(valor);
    }
}

function soma(event) {
    event.preventDefault();
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);
    verificacao(num1 + num2);
}

function subtrair(event){
    event.preventDefault();
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);
    verificacao(num1 - num2)
}

function multiplicar(event){
    event.preventDefault();
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);
    verificacao(num1 * num2);
}

function dividir(event){
    event.preventDefault();
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);
    verificacao(num1 / num2);
}

function apagar(event){
    event.preventDefault();
    numero1.value = 0;
    numero2.value = 0;
    verificacao('Resultado');
}