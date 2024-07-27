function imprimir(texto, sobreescrever=true) {
    let display = document.getElementById('display');

    if (!sobreescrever){
        display.innerHTML += texto + '<br>';
    }else{
        display.innerHTML = texto;
    }
}

// crie uma função que recebe um array (e verifica se é um array) e retorna o último elemento do array

function obterUltimoElemento(lista) {
    if (Array.isArray(lista)){
        let ultimoElemento = lista[lista.length - 1];
        return ultimoElemento;
    }else{
        alert('Isso não é um array');
    }
}

let pessoas = ["Tiago", "Maria", "Joana", "João"];
let frutas = ["laranja", "limão", "tangerina"];

let ultimoElemento = obterUltimoElemento(frutas);

// Crie uma função que incrementa um novo convidado na lista de convidados

let convidados = ["Tiago", "Maria", "Joana", "João"]

function adicionarConvidado(nome){
    convidados.push(nome)
}

imprimir(convidados)

adicionarConvidado("Pedro")

imprimir(convidados)

// Crie uma função que recebe dia, mês e ano e imprime em formato de data. Ex.: 01/01/2001

function formatarValores(valores){
    let valoresFormatados = []

    for(let i = 0; i < valores.length; i++){
        let valor = String(valores[i]);
        let valorFormatado = valor.padStart(2, '0');
        valoresFormatados.push(valorFormatado)
    }

    return valoresFormatados
}

function imprimeData(valores) {
    let comprimento = valores.length;

    if(comprimento == 3){
        let valoresFormatados = formatarValores(valores);
        let formatoData = valoresFormatados.join('/')
        imprimir(formatoData);
    }else{
        alert('Você precisa fornecer 3 valores');
    }
}

imprimeData([1,7,2001])

// crie uma função que retorna nomes em maiúsculo ou minúsculo na lista

function formatarLista (lista, maiusculo=true){
    let listaFormatada = [];

    if (maiusculo === true){
        for (let index = 0; index < lista.length; index++) {
            let element = lista[index];
            let elementFormatado = element.toUpperCase();
            listaFormatada.push(elementFormatado);
        }
    }else{
        for (let index = 0; index < lista.length; index++) {
            let element = lista[index];
            let elementFormatado = element.toLowerCase();
            listaFormatada.push(elementFormatado);
        }
    }

    return listaFormatada
}

imprimir(formatarLista(pessoas, false))


