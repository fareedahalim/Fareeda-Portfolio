function sendMail(){
    let parms ={
        name : document.getElementById("name").value,
        email :document.getElementById("email").value,
        subject :document.getElementById("subject").value,
        message :document.getElementById("message").value
    }
    emailjs.send("service_wnud9sf","template_vlbplhc",parms).then(alert("Email Send"))
    
}