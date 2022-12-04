function dochange() {
    alert('hello with JS included biatch')
}

function Order(){
    let text = "Press a button! \n OK to confirm or Cancel";
    if(confirm(text) == true){
        text = "Order Confirmed";
    }
    else{
        text=" Order Canceled!"
    }
    document.getElementById('mes').innerHTML= text;
}