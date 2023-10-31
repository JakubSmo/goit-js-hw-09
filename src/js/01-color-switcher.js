// Pobranie przycisków
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

// Funkcja do generowania losowego koloru
function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Deklaracja zmiennej przechowującej identyfikator interwału
let intervalId;

// Funkcja rozpoczynająca zmianę koloru tła
function startColorChanging() {
    // Wyłączenie przycisku "Start"
    startButton.disabled = true;

    // Włączenie przycisku "Stop"
    stopButton.disabled = false;

    // Uruchomienie interwału zmieniającego kolor
    intervalId = setInterval(function() {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

// Funkcja zatrzymująca zmianę koloru tła
function stopColorChanging() {
    // Włączenie przycisku "Start"
    startButton.disabled = false;

    // Wyłączenie przycisku "Stop"
    stopButton.disabled = true;

    // Zatrzymanie interwału zmieniającego kolor
    clearInterval(intervalId);
}

// Dodanie event listenerów do przycisków
startButton.addEventListener('click', startColorChanging);
stopButton.addEventListener('click', stopColorChanging);