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

