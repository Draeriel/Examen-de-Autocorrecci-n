window.onload=function (){
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
      document.getElementById("demo").innerHTML =
      xmlDoc.getElementsByTagName("answer")[0].childNodes[0].nodeValue;
  }
    }