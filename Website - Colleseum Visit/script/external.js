function myFunction() {
    var e = document.getElementById('a');
    var st1 = e.value;
    var s = document.getElementById('b');
    var n = s.value;
    var d = document.getElementById('c');
    var m = d.value;
    var Total;
  
    Total = (st1 * m) / n;
    document.getElementById('solution').innerHTML=Total
  }


  // A script to let the user chose and set a theme background first time they login

  function checkLocalStorage(){
    var user=localStorage.getItem("username");
  if (user != null) {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       localStorage.setItem("username",user);
     }
  }
    
}


  // function greet(){
  //   var dis=localStorage.getElementById("");
  //   if (dis=='haile' ){
  //     alert("welcome homepage");
  //   }
  // }

  // var save_button = document.getElementById('Save')
  // save_button.onclick = saveData;
  
  // function saveData(){
  //   alert("Welcome again ");
  // }

