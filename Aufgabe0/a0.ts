document.addEventListener('DOMContentLoaded', function ()
{ 

//var Greeter: string = prompt ("Hier bitte Ihren Namen eingeben");
//
//if (Greeter != null) {
//    document.getElementsByTagName("div")[0].innerHTML = "Hallo " + Greeter + "! :-)";
//}   
//      
//});
    document.getElementById("klicken").addEventListener("click", function () {
        var name: string = prompt("Bitte Namen eingeben");
        if (name != null) {
//            document.getElementsByTagName("div")[0].innerHTML = "Hallo " + name + "! Schön dich zu sehen!";
            
            document.getElementById("ausgabe").innerHTML = "Hallo " + name + "! Schön dich zu sehen!";
            }
    
   
});
    
});

//var name: string = prompt("Bitte Namen eingeben", "Max Musterman");
// if (name != null) {
//        document.getElementById("ausgabe")[0].innerHTML =
//        "Hallo " + name + "! Schön dich zu sehen!";
//    }



//document.addEventListener('DOMContentLoaded', function() {
//
//document.getElementById("Gestaltung").style.color = "#4d1933";
//document.getElementById("Gestaltung").style.fontSize = "3em";
//document.getElementById("Gestaltung").style.fontFamily = "sans-serif";
//document.getElementById("Gestaltung").style.textAlign = "center";
//document.getElementById("Gestaltung").style.backgroundColor = "#f9ecf2";
//    
//}); 