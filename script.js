/* =========================
   Fun Fact Button
   ========================= */

function showFact() {

    const facts = [
        "I am currently living in Taiwan and working as a semiconductor engineer.",
        "I am an introverted person but my work requires me to discuss with different suppliers.",
        "I enjoy traveling and exploring new cultures.",
        "I learned how to ride a bike when I was just 27 years old for only 2 days without scratches on my body.",
        "I love make my house clean and tidy."
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
