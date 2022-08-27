const cabecalho = document.getElementById('header-container');
cabecalho.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencia = document.getElementsByClassName('emergency-tasks')[0];
emergencia.style.backgroundColor = 'rgb(255, 159, 132)';

const semEmergencia = document.getElementsByClassName('no-emergency-tasks')[0];
semEmergencia.style.backgroundColor = 'rgb(249, 219, 94)';

const titulosEmergencia = document.querySelectorAll('.emergency-tasks h3');
    for (i = 0; i < titulosEmergencia.length; i += 1) {
        titulosEmergencia[i].style.backgroundColor = 'rgb(165, 0, 243)';
    }

const titulosSemEmergencia = document.querySelectorAll('.no-emergency-tasks h3');
    for (j = 0; j < titulosSemEmergencia.length; j += 1) {
        titulosSemEmergencia[j].style.backgroundColor = 'rgb(35, 37, 37)';
    }

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';

