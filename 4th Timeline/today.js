const dayEl= document.getElementById('day');
const monthEl = document.getElementById('month');
const yearEl = document.getElementById('year');
const meses=["Janeiro", "Fevereiro", "Março", "Abril","Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

function todaysDate() {
    const currentDate = new Date();
    const date = new Date(currentDate);

    const day = date.getDate();
    const month = meses[date.getMonth()];
    const year = date.getUTCFullYear();

    dayEl.innerHTML = (day);
    monthEl.innerHTML = (month);
    yearEl.innerHTML = (year);
}
//Chamar a função 
todaysDate();

