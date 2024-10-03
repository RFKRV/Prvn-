if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function vypocitat() {
    const num1 = parseFloat(document.getElementById('num1').value); // Corrected 'Document' to 'document'
    const num2 = parseFloat(document.getElementById('num2').value);
    const operace = document.getElementById('operace').value;
    let vysledek;

    if (Nezadáno(num1) || Nezadáno(num2)) {
        vysledek = "Chyba: Zadejte platná čísla.";
    } else {
        if (operace === '+') {
            vysledek = num1 + num2;
        } else if (operace === '-') {
            vysledek = num1 - num2;
        } else if (operace === '*') {
            vysledek = num1 * num2;
        } else if (operace === '/') {
            if (num2 !== 0) {
                vysledek = num1 / num2;
            } else {
                vysledek = "Chyba: Dělení nulou.";
            }
        } else {
            vysledek = "Neznámá operace.";
        }
    }

    document.getElementById('vysledek').innerText = "Výsledek: " + vysledek;
    console.log(vysledek);
}
