console.log("Hello world!");

function useralert(){

    alert("Hey welcome to the Website!!");
}


function changecolor(){

    var para = document.getElementById("para1");
    para.innerHTML = "Updated Text in Para"
}
var btn = document.getElementById("btn1");

btn.addEventListener('mouseover',changecolor);


function displayFormData(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if(!name || !email){
        alert("Data No Filled!");
    }
    else{
        alert("Submited Data Name: "+ name + " Email: "+email);
        console.log("Submited Data Name: "+ name + " Email: "+email);
    }
    
}

document.getElementById("form-btn").addEventListener("click",displayFormData);

