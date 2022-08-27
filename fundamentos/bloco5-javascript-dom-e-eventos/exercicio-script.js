// PASSO 1
const elementH1 = document.createElement('h1');
    elementH1.innerText = 'Exercício 5.2 - JavaScript DOM';
    document.body.appendChild(elementH1);

// PASSO 2
const elementMain = document.createElement('main');
    elementMain.className = 'main-content';
    document.body.appendChild(elementMain);

// PASSO 3
const elementSectionCenter = document.createElement('section');
    elementSectionCenter.className = 'center-content';
    elementMain.appendChild(elementSectionCenter);

// PASSO 4
const elementCenterParagraph = document.createElement('p');
    elementCenterParagraph.innerText = 'Oi, eu sou o Goku!';
    elementSectionCenter.appendChild(elementCenterParagraph);

// PASSO 5
const elementSectionLeft = document.createElement('section');
    elementSectionLeft.className = 'left-content';
    elementMain.appendChild(elementSectionLeft);


// PASSO 6
const elementSectionRight = document.createElement('section');
    elementSectionRight.className = 'right-content';
    elementMain.appendChild(elementSectionRight);

// PASSO 7
const elementImg = document.createElement('img');
    elementImg.className = 'small-image';
    elementImg.src = 'https://picsum.photos/200';
    elementSectionLeft.appendChild(elementImg);

// PASSO 8
const elementUL = document.createElement('ul');
    elementSectionRight.appendChild(elementUL);
const arrayNumbers = ['Um', 'Dois', 'Trẽs', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
    for (let index in arrayNumbers) {
        const elementLI = document.createElement('li');
            elementLI.innerHTML = arrayNumbers[index];
            elementUL.appendChild(elementLI);
    }

// PASSO 9
for (let index = 1; index <= 3; index += 1) {
    const elementH3 = document.createElement('h3');
    elementH3.innerHTML = 'ITEM ' + index;
    elementMain.appendChild(elementH3);
}

// // // // // // // // // // // //SEGUNDA PARTE // // // // // // // // // // // // //

// PASSO 1
const title = document.querySelector('h1');
    title.className = 'tilte';

// PASSO 2
const elementsH3 = document.getElementsByTagName('h3');
    for (let index = 0; index < 3; index += 1) {   
        elementsH3[index].className = 'description';
}

// PASSO 3
const sectionLeftContent = document.getElementsByClassName('left-content')[0];
    elementMain.removeChild(sectionLeftContent);

// PASSO 4
const sectionRightContent = document.getElementsByClassName('right-content')[0];
    sectionRightContent.style.marginRight = 'auto';

// PASSO 5
const centerSectionContent = document.getElementsByClassName('center-content')[0];
    centerSectionContent.parentNode.style.backgroundColor = 'green';

// PASSO 6
const ul = document.getElementsByTagName('ul')[0];
    ul.lastChild.remove();
    ul.lastChild.remove();
    
