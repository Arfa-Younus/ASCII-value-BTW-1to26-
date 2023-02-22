const asci = {
    chr: function(num) {
      return String.fromCharCode(64 + parseInt(num));
    }
  };
  
  function showChar() {
    const input = document.getElementById("input").value;
    const result = document.getElementById("result");
    if (input >= 1 && input <= 26) {
      result.innerHTML = "The character is: " + asci.chr(input);
    } else {
      result.innerHTML = "Please enter a number between 1 and 26.";
    }
  }
  