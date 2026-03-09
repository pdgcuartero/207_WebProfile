function showFact(){

    const facts = [
        "I enjoy learning Mandarin and Taiwanese.",
        "I like building dashboards and data visualizations.",
        "I enjoy traveling and exploring new cultures.",
        "I like learning new technology skills."
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    document.getElementById("funFact").innerText = randomFact;
}
