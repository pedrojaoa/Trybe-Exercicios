function verificaPalindromo(palavra) {
    for (let index in palavra) {
        if (palavra[index] != palavra[(palavra.length -1) - index]) {
            return false;
        }
    }
    return true;
}
let palavra = 'a rara'
console.log(palavra.length)