const btnAggiungi = document.getElementById('btnAggiungi');
const inputMacchina = document.getElementById('inputMacchina');
const inputTemperatura = document.getElementById('inputTemperatura');
const container = document.querySelector('.container');
const tempMediaElement = document.getElementById('tempMedia');

function calcolaTemperaturaMedia() {
    const temperatureElements = container.querySelectorAll('.temperatura');
    
    if (temperatureElements.length === 0) {
        tempMediaElement.textContent = '-';
        return;
    }

    let sommaTemperature = 0;
    temperatureElements.forEach(elem => {
        // Estrai solo il numero (rimuovi il simbolo °C)
        const temp = parseFloat(elem.textContent.replace('°C', ''));
        if (!isNaN(temp)) {
            sommaTemperature += temp;
        }
    });

    const media = (sommaTemperature / temperatureElements.length).toFixed(1);
    tempMediaElement.textContent = media + '°C';
}

function aggiungiNuovo() {
    const macchina = inputMacchina.value.trim();
    const temperatura = inputTemperatura.value.trim();

    if (macchina === '' || temperatura === '') {
        alert('Per favore, compila tutti i campi');
        return;
    }

    // Crea il nuovo elemento register
    const newRegister = document.createElement('div');
    newRegister.classList.add('register');
    newRegister.innerHTML = `
        <div class="macchina">${macchina}</div>
        <div class="temperatura">${temperatura}</div>
    `;

    // Aggiungi al container
    container.appendChild(newRegister);

    // Pulisci i campi input
    inputMacchina.value = '';
    inputTemperatura.value = '';
    inputMacchina.focus();

    // Aggiorna la temperatura media
    calcolaTemperaturaMedia();
}

btnAggiungi.addEventListener('click', aggiungiNuovo);

// Permetti di aggiungere con il tasto Enter
inputTemperatura.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        aggiungiNuovo();
    }
});

inputMacchina.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        inputTemperatura.focus();
    }
});

// Calcola la media al caricamento della pagina
document.addEventListener('DOMContentLoaded', calcolaTemperaturaMedia);
