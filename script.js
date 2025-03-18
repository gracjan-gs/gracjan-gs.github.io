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
