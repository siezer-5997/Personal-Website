function greet(){
    var shoe_type = document.getElementsByName("shoe");
    var result = "";

    for(i=0; i< shoe_type.length; i++){
        if(shoe_type[i].checked){
            document.getElementById("purchase").innerHTML = "Your Shoe is on the way: <div class='result'><img src='../images/"+shoe_type[i].value+".jpeg'></div>  "+ shoe_type[i].value;
        }
    }
}

function choose(){
    let message;
    if(confirm("Press a button")== true){
      message = "You pressed OK";
    }
    else{
      message = "Cancelled";
    }
    document.getElementById("mes").innerHTML = "<div class='message'>"+message+"</div>";
  }