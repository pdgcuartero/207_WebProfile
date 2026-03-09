/* =========================
   Fun Fact Button
   ========================= */

function showFact() {

    const facts = [
        "I enjoy learning Mandarin and Taiwanese.",
        "I like building dashboards and data visualizations.",
        "I enjoy traveling and exploring new cultures.",
        "I enjoy exploring new technologies.",
        "I like studying languages and meeting people from different cultures."
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    document.getElementById("funFact").innerText = randomFact;
}


/* =========================
   Header Shadow on Scroll
   ========================= */

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =========================
   Typing Animation for Name
   ========================= */

const nameText = "Patrick Go";
let index = 0;

function typeEffect() {

    const nameElement = document.querySelector("header h1");

    if (index < nameText.length) {
        nameElement.textContent += nameText.charAt(index);
        index++;
        setTimeout(typeEffect, 120);
    }

}

/* Clear text first then start typing */
document.addEventListener("DOMContentLoaded", function () {

    const nameElement = document.querySelector("header h1");
    nameElement.textContent = "";

    typeEffect();

});
