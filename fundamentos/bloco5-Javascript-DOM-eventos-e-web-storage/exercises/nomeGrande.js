function mudaTextoParagrafo() {
    document.getElementsByClassName('paragraph')[0].innerText = 'Daqui a 2 anos me vejo morando em São Paulo.';
    document.getElementsByClassName('paragraph')[1].innerText = 'Me vejo também, ganhando um bom salário e trabalhando como dev back-end enquanto estudo para a área de cybersegurança.';
    document.getElementsByClassName('paragraph')[2].innerText = 'Tudo isso graças ao meu próprio esforço. Mas não poderei deixar de agradecer à TRYBE por todo o apoio e ensinamentos.'
}
mudaTextoParagrafo();

function mudaCorDosLadosParaTrybeGreen() {
    const quadrado = document.getElementsByClassName('main-content')[0];
    quadrado.style.backgroundColor = 'rgb(76,164,109)';
}
mudaCorDosLadosParaTrybeGreen();

function mudaCorDoMeioParaBranco() {
    const meiuca = document.getElementsByClassName('center-content')[0];
    meiuca.style.backgroundColor = 'white';
}
mudaCorDoMeioParaBranco();

function corrigeTextoH1() {
    const textoCorrigido = document.getElementsByClassName('title')[0];
    textoCorrigido.innerText = 'Exercício 5.1 - JavaScripit';
}
corrigeTextoH1();

function uppercaseParagraph() {
    const textoMaiusculo = document.getElementsByTagName('p');
    for (index = 0; index < textoMaiusculo.length; index += 1) {
        textoMaiusculo[index].style.textTransform = 'uppercase';
    }
}
uppercaseParagraph();

function showParagraphConsole() {
    const textoParagrafo = document.getElementsByTagName('p');
    for (jndex = 0; jndex < textoParagrafo.length; jndex += 1) {
        textoParagrafo[jndex].style.textTransform = 'uppercase';
        console.log(textoParagrafo[jndex]);
    }
}
showParagraphConsole();
