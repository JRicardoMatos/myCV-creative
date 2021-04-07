/*Animação 3D do cartão, copiei parte do código porque gostei do efeito mas não o sabia fazer todo sozinho,
por algum motivo que desconheço só dá no Chrome.*/
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const me = document.querySelector(".me img");

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 19;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 19;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none";
    me.style.transform = "all 0.5 ease-out";
    me.style.transform = "translateZ(300px)";

});

container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    me.style.transform = "translateZ(0px) rotateZ(0deg)";
});
