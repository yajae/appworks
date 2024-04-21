function ajax(src, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", `${src}`, true);
    xhttp.send();
    console.log(this.responseText);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
        }
      };
}
function render(data) {
    const content = document.createElement("div");
    content.innerText = data;
    document.body.appendChild(content); // Append to body:
}

ajax(
'/notes',
function (response) {
render(response);
}
); 
// you should get product information in JSON format and render
//data in the page
