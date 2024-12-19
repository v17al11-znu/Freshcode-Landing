// script.js

// Максимальні значення
const maxMillions = 99;
const maxThousands = 999;
const maxUnits = 999;

// Поточні значення
let millions = 1;
let thousands = 574;
let units = 346;

// Отримуємо елементи
const millionsEl = document.getElementById('counter-millions');
const thousandsEl = document.getElementById('counter-thousands');
const unitsEl = document.getElementById('counter-units');

// Функція для оновлення однієї цифри з анімацією
function updateDigit(digitContainer, newDigit, withAnim) {
    const digitInner = digitContainer.querySelector('.digit-inner');
    const currentDigit = digitInner.textContent;

    if (newDigit !== currentDigit) {
        if (withAnim) {
            digitContainer.classList.add('animate');

            // Затримка для анімації перед зміною цифри
            setTimeout(() => {
                digitInner.textContent = newDigit;
                digitContainer.classList.remove('animate');
            }, 500); // Тривалість анімації повинна відповідати CSS transition
        } else {
            digitInner.textContent = newDigit;
            digitContainer.classList.remove('animate');
        }
    }
}

// Функція для оновлення всього лічильника
function updateCounter(withAnim = true) {
    // Оновлюємо значення
    // units++;
    // if (units > maxUnits) {
        // units = 0;
        thousands++;
        if (thousands > maxThousands) {
            thousands = 0;
            millions++;
            if (millions > maxMillions) {
                millions = 0;
            }
        }
    // }

    // Форматуємо числа з нулями
    const millionsStr = String(millions).padStart(2, '0');
    const thousandsStr = String(thousands).padStart(3, '0');
    const unitsStr = String(units).padStart(3, '0');

    // Оновлюємо кожну цифру окремо
    const millionsDigits = millionsStr.split('');
    const thousandsDigits = thousandsStr.split('');
    const unitsDigits = unitsStr.split('');

    // Функція для оновлення цифр у певній групі
    function updateGroup(numberEl, digits) {
        const digitContainers = numberEl.querySelectorAll('.digit');
        digits.forEach((digit, index) => {
            updateDigit(digitContainers[index], digit, withAnim);
        });
    }

    // Оновлюємо кожну групу цифр
    updateGroup(millionsEl, millionsDigits);
    updateGroup(thousandsEl, thousandsDigits);
    updateGroup(unitsEl, unitsDigits);
}

// Функція для збільшення числа (можна викликати з кнопки або іншого тригера)
function increment() {
    updateCounter();
}

// Ініціалізація одометра
updateCounter(false);

// Запускаємо оновлення кожні 5 секунд
setInterval(updateCounter, 2000);
