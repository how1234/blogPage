var xhr = new XMLHttpRequest(); // Already deprecated

console.log("send")
xhr.open('get','test.txt',true)
xhr.send(null)


xhr.onreadystatechange = function() {
    if (this.readyState === this.DONE) {
        console.log(this.status) // do something; the request has completed
    }
}


//xhr is synchronous


if((xhr.status >= 200 && xhr.status<304) || xhr.status== 304 ){
    alert(xhr.responseText)
}else{
    alert("Request was unsuccessful" + xhr.status)
}