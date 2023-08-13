function buscaBinaria(arr, valor) {
    let inicio = 0;
    let fim = arr.length - 1;

    while (inicio <= fim) {
        const meio = Math.floor((inicio + fim) / 2);

        if (arr[meio] === valor) {
            return meio;
        } else if (arr[meio] < valor) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    return -1;
}

const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const valorBuscado = 20;

const indice = buscaBinaria(array.sort((a, b) => a - b), valorBuscado);

if (indice !== -1) {
    console.log(`O valor ${valorBuscado} foi encontrado no índice ${indice} do array.`);
} else {
    console.log(`O valor ${valorBuscado} não foi encontrado no array.`);
}