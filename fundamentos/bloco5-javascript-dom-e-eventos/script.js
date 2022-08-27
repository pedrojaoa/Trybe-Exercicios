const ondeEsta = document.getElementById('elementoOndeVoceEsta');

const paiOndeEsta = elementoOndeVoceEsta.parentElement;
paiOndeEsta.style.color = 'blue';

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
    primeiroFilhoDoFilho.innerText = 'OLÁ, MUNDO!'

const primeiroFilho = paiOndeEsta.firstElementChild;

const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

const textElement = elementoOndeVoceEsta.nextSibling

