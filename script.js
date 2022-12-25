function setDefaults(){
    let date = new Date();
    let currentYear = date.getFullYear(); // in case you want the year to change dynamically
    let footerYear = document.getElementById("footer-year");
    footerYear.innerHTML = "2022"; // for now I will keep the year fixed to when the project was created
}