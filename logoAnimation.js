window.onload = function() {
    
    //current letter spacing value
    var ltv = 0;
  
    //logo ID element
    var logo1 = document.getElementById("logo1");
    var logo2 = document.getElementById("logo2");
  
    //set frequency(FPS) of animation
    var time = setInterval(expand, 1);
  
    //function that sets animation speed and dur
    function expand() {
      if (ltv >= 15) {
        clearInterval(time);
      }
      else if (ltv < 10) {
        ltv += 0.05;
        logo1.style.letterSpacing = ltv+"px";
        logo2.style.letterSpacing = ltv+"px";
      } 
      else if (ltv < 12) { 
        ltv += 0.03;
        logo1.style.letterSpacing = ltv+"px";
        logo2.style.letterSpacing = ltv+"px";
      } 
      else if (ltv < 14) { 
        ltv += 0.02;
        logo1.style.letterSpacing = ltv+"px";
        logo2.style.letterSpacing = ltv+"px";
      } 
      else {
        ltv += 0.01;
        logo1.style.letterSpacing = ltv+"px";
        logo2.style.letterSpacing = ltv+"px";
      }
    }
  }