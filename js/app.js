const output = document.querySelector('.output');
const button = document.querySelector('button');

//Global
let url;

//Data
let myData = [
    ["row", "content"],
    ["row", "content2,content2"]
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
    let fileName = "file.csv";
    let properties = {
        type: "text/csv;charset=utf-8;"
    };
    data.forEach(element => {
        //console.log(element.join())
        holder +=clean(element) + "\n";
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

    //function which checks whether the data as any commas
    function clean(row){
        let rep = "";
       row.forEach(function (cell,index) {
        console.log(index);
        cell = cell == null ? "" : cell.toString();
        if(cell.search(/("|,|\n)/g) >= 0 ) cell = '"' + cell + '"';   
        //https://regexr.com/
        if(index>0) rep+=",";
        rep+= cell;
       })
   return rep;    
  }

}