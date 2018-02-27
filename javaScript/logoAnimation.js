window.addEventListener("load", function startPageEvent() {
    
  //current letter spacing value.
  let lsv = 0;

  //logo ID element
  const logo1 = document.getElementById("logo1");
  const logo2 = document.getElementById("logo2");

  //changes the letterSpacing to equal the 'lsv' value.
  const logoLs = x => { x.style.letterSpacing = lsv+"px";}

  if ( $(window).width() > 539) {      

    //set interval of expand function by 10 milliseconds.
    const time = setInterval(expand, 10);

    //function that sets animation speed and dur.
    function expand() {
      if (lsv >= 31) {
        clearInterval(time);
      }
      else if (lsv < 20) {
        lsv += 0.22;
        logoLs(logo1);
        logoLs(logo2);
      } 
      else if (lsv < 27) { 
        lsv += 0.14;
        logoLs(logo1);
        logoLs(logo2);
      } 
      else if (lsv < 29) { 
        lsv += 0.06;
        logoLs(logo1);
        logoLs(logo2);
      } 
      else {
        lsv += 0.03;
        logoLs(logo1);
        logoLs(logo2);
      }
    }
  } 
  else 
  {
    lsv = 10;
    logoLs(logo1);
    logoLs(logo2);
  }
});