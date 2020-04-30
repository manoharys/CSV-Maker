const output = document.querySelector('.output');
const button = document.querySelector('button');

button.style.padding = "10px";
button.style.backgroundColor = "green";
button.style.fontSize = "2.4rem";
button.style.cursor = "pointer";
button.style.margin = "20px";
button.style.color = 'white';
button.style.fontFamily = "monospace"

button.addEventListener('click', function () {
    console.log("download CSV");
})