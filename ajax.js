function getData(){
    console.log("get data clicked")


//create XHR object
var xhttp = new XMLHttpRequest();

//create an event listener
xhttp.onreadystatechange = function(){
    if (xhttp.readyState == 4 && xhttp.status == 200){
        var data = JSON.parse(this.responseText);
        console.log(data)
        var output = `<table>
        <tr><th>No</th>
                         <th>Todo</th></tr>`;
        for (let i=0; i<data.length; i++){
            var checked = ''
            var disabled = ''
            if(data[i].completed) {
                checked = 'checked';
                disabled = "disabled";
            }else{
                checked=''
            }
            output += `<tr>
                        <td>${data[i].id}</td>
                        <td>${data[i].title}</td>
                         <td><input type="checkbox" ${checked} ${disabled} onclick="count()"/></td>
                        </tr>`
        }
        output += '</table>'
        document.getElementById('jk').innerHTML=output
 

    }}


// request specification
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true)

// sending request
xhttp.send();
};
       
let n = 0;
function count(){
    console.log(n)
}