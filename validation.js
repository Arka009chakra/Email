async function fun221(){

    let email=document.getElementById("t121").value;
    let response= await fetch('http://localhost:5000/forgot-password',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",

        },
        body:JSON.stringify({
            email
        })
         
      
    }).then(function(response){
        return response.json();
    }).then(function(data){
    alert(data.message);
    }).catch(function(){
        alert("Something Went Wrong!!!");
    })
    
}
