window.onload = function() {
    
    //current letter spacing value
    var lsv = 0;
  
    //logo ID element
    var logo1 = document.getElementById("logo1");
    var logo2 = document.getElementById("logo2");
  
    //set interval of expand function by 1 millisecond
    var time = setInterval(expand, 1);
  
    //function that sets animation speed and dur
    function expand() {
      if (lsv >= 15) {
        clearInterval(time);
      }
      else if (lsv < 10) {
        lsv += 0.05;
        logo1.style.letterSpacing = lsv+"px";
        logo2.style.letterSpacing = lsv+"px";
      } 
      else if (lsv < 12) { 
        lsv += 0.03;
        logo1.style.letterSpacing = lsv+"px";
        logo2.style.letterSpacing = lsv+"px";
      } 
      else if (lsv < 14) { 
        lsv += 0.02;
        logo1.style.letterSpacing = lsv+"px";
        logo2.style.letterSpacing = lsv+"px";
      } 
      else {
        lsv += 0.01;
        logo1.style.letterSpacing = lsv+"px";
        logo2.style.letterSpacing = lsv+"px";
      }
    }
  }