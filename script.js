document.getElementById("formularz").addEventListener("submit", function(event) {
    event.preventDefault(); // Zatrzymuje domyślne wysyłanie formularza

    var imie = document.getElementById("imie").value;
    var email = document.getElementById("email").value;

    var url = "https://script.google.com/macros/s/AKfycbw7BTM1hG2XR3_7vaBk2WfQk2hfLgvPPPzGem0tSAyw8lQfiyB7_kdJZM9mXtinQ0_z/exec";
    
    var dane = new FormData();
    dane.append("imie", imie);
    dane.append("email", email);

    fetch(url, {
        method: "POST",
        body: dane
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("odpowiedz").innerText = "Dziękuję, zakończone powodzeniem";
        document.getElementById("formularz").reset();
    })
    .catch(error => {
        document.getElementById("odpowiedz").innerText = "Przepraszam, spróbuj ponownie pózniej";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formularz");
    const submitButton = form.querySelector("button");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Zapobiega domyślnemu wysłaniu formularza
        
        // Zmiana tekstu przycisku
        submitButton.textContent = "Przesłano";
        submitButton.style.backgroundColor = "green"; // Opcjonalnie zmień kolor przycisku
        submitButton.disabled = true; // Opcjonalnie zablokuj ponowne kliknięcie

        // Tutaj możesz dodać kod do faktycznego wysłania danych np. AJAX/fetch
        
        setTimeout(() => {
            form.submit(); // Jeśli chcesz, aby formularz jednak został wysłany po kilku sekundach
        }, 2000);
    });
});
