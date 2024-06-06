let paragraph = document.getElementById("horoscope"); // Text area where result is displayed
let button = document.getElementById("buttonResult"); // button for the result
let page = document.getElementById("styleCss");

//Function to display the fraudoscope result when button is clicked + change css

const displayFraudoscope = () => {
    page.href = "./styleClicked.css";
    paragraph.innerHTML = resultat; //result from messageGenerator.js
    button.innerHTML = "Reviens demain pour un nouveau Fraudoscope!"
}

button.onclick = displayFraudoscope;

