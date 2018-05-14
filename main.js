var inicial = 0;
var resp1 = 0;
var resp2 = 1;
var contador = 1;
var resultado = 0;
var correcto = false;

let formnode;
let divnode;
let h3node;
let imagennode;    
let inputnode1;
let spannode1;
let brnode;
let brnode1;
let inputnode2;
let spannode2;
let brnode2;
let boton;
let brnode3;
let divnode3 = document.createElement("DIV");
let divnode4= document.createElement("DIV");

window.onload=function() {

    formnode = document.createElement("FORM")

    divnode = document.createElement("DIV")
    divnode.setAttribute('id', 'quiz')
     
    h3node = document.createElement("H3")
    h3node.setAttribute('id', 'pregunta')
    divnode.appendChild(h3node)
     
    imagennode = document.createElement("IMG")
    imagennode.setAttribute('id', 'imagen')
    divnode.appendChild(imagennode)
     
    inputnode1 = document.createElement("INPUT")
    inputnode1.setAttribute('type', 'radio')
    inputnode1.setAttribute('name', 'Frage')
    inputnode1.setAttribute('value', 'Aznar')
    divnode.appendChild(inputnode1)

    spannode1 = document.createElement("SPAN")
    spannode1.setAttribute('class', 'question')
    spannode1.setAttribute('id', 'respuesta1')
    divnode.appendChild(spannode1)

    brnode = document.createElement("BR")
    divnode.appendChild(brnode)

    brnode1 = document.createElement("BR")
    divnode.appendChild(brnode1)
    
    inputnode2 = document.createElement("INPUT")
    inputnode2.setAttribute('type', 'radio')
    inputnode2.setAttribute('name', 'Frage')
    inputnode2.setAttribute('value', 'Freezer')
    divnode.appendChild(inputnode2)

    spannode2 = document.createElement("SPAN")
    spannode2.setAttribute('class', 'question')
    spannode2.setAttribute('id', 'respuesta2')
    divnode.appendChild(spannode2)
 
    brnode2 = document.createElement("BR")
    divnode.appendChild(brnode2)

    boton = document.createElement("BUTTON")
    boton.setAttribute('type', 'button')
    boton.setAttribute('onClick', 'next()')
    boton.innerHTML = "Siguente"
    divnode.appendChild(boton)

    brnode3 = document.createElement("BR")
    divnode.appendChild(brnode3)
     
    formnode.appendChild(divnode)

    document.getElementById("tevoyaraptar").appendChild(formnode)
     
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xhttp.open("GET", "main.xml", true);
    xhttp.send();


    function myFunction(xml) {
        var xmlDoc = xml.responseXML;
        
        document.getElementById("pregunta").innerHTML =
        xmlDoc.getElementsByTagName("question")[inicial].childNodes[0].nodeValue;
        
        document.getElementById("imagen").src =
        xmlDoc.getElementsByTagName("imagen")[inicial].childNodes[0].nodeValue;
        
        document.getElementById("respuesta1").innerHTML =
        xmlDoc.getElementsByTagName("answer")[resp1].childNodes[0].nodeValue;

        console.log(xmlDoc.getElementsByTagName('answer')[resp1].attributes[0]);
        if (xmlDoc.getElementsByTagName('answer')[resp1].attributes[0].nodeValue =='y') {
            spannode1.setAttribute('correct', 'y');
            spannode2.setAttribute('correct', 'n');
        } else {
            spannode2.setAttribute('correct', 'y');
            spannode1.setAttribute('correct', 'n');
        }

        document.getElementById("respuesta2").innerHTML =
        xmlDoc.getElementsByTagName("answer")[resp2].childNodes[0].nodeValue;   
 
    }
}

function next() {
    correcto = false;
    inicial = inicial + 1;
    resp1 = resp1 + 2;
    resp2 = resp2 + 2;
    contador += 1;
    
        if ((spannode1.attributes[2].value == 'y') && inputnode1.checked) {
            resultado = resultado + 1;
            correcto = true;
            
        }
        if ((spannode2.attributes[2].value == 'y') && inputnode2.checked) {
            resultado = resultado + 1
            correcto = true;
        }
        if (contador < 12) {
        hi()
    } else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                myFunction(this);
            }
        };

        xhttp.open("GET", "main.xml", true);
        xhttp.send();


        function myFunction(xml) {
            var xmlDoc = xml.responseXML;

            document.getElementById("respuesta").innerHTML =
            xmlDoc.getElementsByTagName("respuesta")[inicial -1].childNodes[0].nodeValue;

        }    
        divnode4.setAttribute('id', 'resultado')
        document.getElementById("tevoyaraptar").appendChild(divnode4)
        if (resultado <= 3) {
            var mensaje = "Seguro que eres votante del PP."
        } else if (resultado <= 6) {
            var mensaje = "Parece que no eres capaz de distinguir Namek de La Tierra."
        } else if (resultado <= 10) {
            var mensaje = "¿A quién votarías como presidente?"
        } else {
            var mensaje = "It's over 9000!!!!!!"
        }
        document.getElementById("resultado").innerHTML = "El total de respuestas correctas es de " + resultado +"\n" + mensaje;
    }
    
}

function hi() {
    divnode3.setAttribute('id', 'respuesta')
    if (correcto == false) {
        divnode3.setAttribute("style", "background-color: red;")
    } else {
        divnode3.setAttribute("style", "background-color: green;")
    }
    document.getElementById("tevoyaraptar").appendChild(divnode3)
    
    

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };

    xhttp.open("GET", "main.xml", true);
    xhttp.send();


    function myFunction(xml) {
        var xmlDoc = xml.responseXML;
        
        document.getElementById("pregunta").innerHTML =
        xmlDoc.getElementsByTagName("question")[inicial].childNodes[0].nodeValue;
        
        document.getElementById("imagen").src =
        xmlDoc.getElementsByTagName("imagen")[inicial].childNodes[0].nodeValue;
        
        document.getElementById("respuesta1").innerHTML =
        xmlDoc.getElementsByTagName("answer")[resp1].childNodes[0].nodeValue;

        console.log(xmlDoc.getElementsByTagName('answer')[resp1].attributes[0]);
        if (xmlDoc.getElementsByTagName('answer')[resp1].attributes[0].nodeValue =='y') {
            spannode1.setAttribute('correct', 'y');
            spannode2.setAttribute('correct', 'n');
        } else {
            spannode2.setAttribute('correct', 'y');
            spannode1.setAttribute('correct', 'n');
        }

        document.getElementById("respuesta2").innerHTML =
        xmlDoc.getElementsByTagName("answer")[resp2].childNodes[0].nodeValue;  
        
        document.getElementById("respuesta").innerHTML =
        xmlDoc.getElementsByTagName("respuesta")[inicial -1].childNodes[0].nodeValue;
    }
}