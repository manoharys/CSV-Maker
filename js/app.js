const output = document.querySelector('.output');
const button = document.querySelector('button');

//Global
let url;

//Data
let myData = [
    ["row", "content"],
    ["row", "content2"]
]

button.style.padding = "10px";
button.style.backgroundColor = "green";
button.style.fontSize = "2.4rem";
button.style.cursor = "pointer";
button.style.margin = "20px";
button.style.color = 'white';
button.style.fontFamily = "monospace"

button.addEventListener('click', function () {
    createCSV(myData);
})

//processing the data
function createCSV(data) {
    //console.log(data);
    if(url !== null){
        window.URL.revokeObjectURL(url)
    }
    let holder = "";
    let fileName = "file.txt";
    let properties = {
        type: "text/plain"
    };
    data.forEach(element => {
        //console.log(element.join())
        holder += element.join() + "\n";
    });
    //console.log(holder)
    //creating the file
    let file = new File([holder], fileName, properties);
    console.log(file);
    let link = document.createElement('a');
    url = URL.createObjectURL(file);
    link.setAttribute("href", url);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}