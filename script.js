const btnAggiungi = document.getElementById('btnAggiungi');
const inputMacchina = document.getElementById('inputMacchina');
const inputTemperatura = document.getElementById('inputTemperatura');
const container = document.querySelector('.container');

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
