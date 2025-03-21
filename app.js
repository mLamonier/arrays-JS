let minhaLista = [1,2,3];
let outraLista = [4,2,2];

let novaLista = minhaLista.concat(outraLista);
console.log(novaLista);

console.log(removerDuplicatas(novaLista));

function removerDuplicatas(lista){
    return [...new Set(lista)];
}

function validarNumero(numero){
    if (numero > 0){
        return(alert('O número é positivo.'));
    }
    if (numero == 0){
        return(alert('O número é zero.'));
    }
    if (numero < 0){
        return(alert('O número é negativo.'));
    }    
}

function maiorDeIdade(idade){
    if (idade >= 18){
        return(alert('Você é maior de idade.'));
    } else {
        return(alert('Você é menor de idade'));
    }
}

function validarString(string){
    if (string == ''){
        return(alert('A string está vazia'));
    } else {
        return(alert('A string não é vazia'));
    }
}

function calcularBissexto() {
    let day_array = [
      'Segunda-Feira', 
      'Terça-Feira', 
      'Quarta-Feira', 
      'Quinta-Feira', 
      'Sexta-Feira', 
      'Sábado', 
      'Domingo'];
    let date_full = new Date(document.form_main.date.value);
    let calcular_bissexto = (ano) => (ano % 4 == 0 &&  ano % 100 != 0 ||  ano % 400 == 0)  
    ? 'E bissexto' : 'Nao e bissexto';
    document.querySelector('#tipo').innerText = calcular_bissexto(date_full.getFullYear());
    document.querySelector('#dia').innerText = day_array[date_full.getDay()];
  }

  function calcularMedia(n1, n2){
    if (isNaN(n1)|| isNaN(n2)){
        return(alert('Valor inserido não é número'));
    } else {
        let media = (n1 + n2) / 2;
        return(alert(`A média dos 2 números é ${media}`));
    }
}

function tamanhoArray(array){
    let tamanho = array.length;
    return(alert(`O tamanho desse array é ${tamanho}`));
}

function verificarArray(array){
    if (amigos.includes('Beatriz')){
        return(alert('A Beatriz está inclusa'));
    } else {
        return(alert('A Beatriz não está inclusa'));
    }
}

function calcularSomaProduto(array) {
    let somaPares = 0;
    let produtoImpares = 1;

    for (let numero of array) {
        if (numero % 2 === 0) {
            somaPares += numero;
        } else {
            produtoImpares *= numero;
        }
    }

    return {
        somaPares,
        produtoImpares
    };
}

const numeros = [1, 2, 3, 4, 5];
const resultado = calcularSomaProduto(numeros);
console.log("Soma dos pares:", resultado.somaPares);
console.log("Produto dos ímpares:", resultado.produtoImpares);
