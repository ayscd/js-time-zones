function displayMyTime() {
    let myTime = moment().tz("Brazil/East").format(`[It is] dddd, MMMM D, YYYY - HH:mm [in Minas Gerais, Brazil]`);
    let brazilDate = document.querySelector("#local-time-zone");
    brazilDate.innerHTML = myTime;
}

function displayFutureDate() {
    let parisTime = moment().tz("Europe/Paris").add(10, "years").format(`[10 years from now, it will be] dddd, MMMM D, YYYY - HH:mm [in Paris, France]`);

    let futureDate = document.querySelector("#future-date");
    futureDate.innerHTML = parisTime;
}

function displayCurrentDate() {
    let honoluluTime = moment().tz("Pacific/Honolulu").format(`[It is] dddd, MMMM D, YYYY - HH:mm`);
    let currentDate = document.querySelector("#current-date");
    currentDate.innerHTML = honoluluTime;
}

displayCurrentDate();
displayFutureDate();
displayMyTime();