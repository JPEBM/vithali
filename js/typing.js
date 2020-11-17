var text = "Atención personalizada: 966 425 490 - contacto@vithalinutricion.com";
var punctSlowDownArr = ["!", ".", "?"];
var newLine = "<br>";

function automaticTyping(){
  var index = 0;
  var el = document.getElementById("automatic-typing");
  typing();
  function typing() {
    // If it's the end of the text, return.
    if (index > text.length - 1)
      return;

    var char = text.charAt(index);
    // Verify if we have to continue on a new line. 
    if(char == "<" && text.substring(index, index + 4) == newLine)
      {
        el.innerHTML += newLine;
        index += 4;
        // The typing speed is slowed down.
        setTimeout(typing, Math.floor((Math.random() * 300) + 200));
      }
    else
      {
        el.innerHTML += char;
        // The typing speed is slowed down when special punctuation characters are encountered.
        if (punctSlowDownArr.indexOf(char) > -1) 
          setTimeout(typing, Math.floor((Math.random() * 250) + 150));
        else
          setTimeout(typing, Math.floor((Math.random() * 70) + 30));
        index++;
      }
    }
  }
            
automaticTyping();