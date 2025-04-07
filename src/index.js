function displayCurrentDate() {
    let honoluluTime = moment().tz("Pacific/Honolulu").format(`[It is] dddd, MMMM D, YYYY - HH:mm`);
    let currentDate = document.querySelector("#current-date");
    currentDate.innerHTML = honoluluTime;
}

displayCurrentDate();