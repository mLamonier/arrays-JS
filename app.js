let minhaLista = [1,2,3];
let outraLista = [4,2,2];

let novaLista = minhaLista.concat(outraLista);
console.log(novaLista);

console.log(removerDuplicatas(novaLista));

function removerDuplicatas(lista){
    return [...new Set(lista)];
}