
window.onload = function () {
   
    fetch("/user").then((response) => {

        return response.text();
    }).then((val)=>{

        console.log(val)
    })
}