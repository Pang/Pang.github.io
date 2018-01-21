window.addEventListener("load", function startPageEvent() {
    
  //current letter spacing value.
  let lsv = 0;

  //logo ID element
  const logo1 = document.getElementById("logo1");
  const logo2 = document.getElementById("logo2");

  //set interval of expand function by 10 milliseconds.
  const time = setInterval(expand, 10);

  //changes the letterSpacing to equal the 'lsv' value.
  const logoLs = x => { x.style.letterSpacing = lsv+"px";}

  //function that sets animation speed and dur.
  function expand() {
    if (lsv >= 15) {
      clearInterval(time);
    }
    else if (lsv < 10) {
      lsv += 0.16;
      logoLs(logo1);
      logoLs(logo2);
    } 
    else if (lsv < 12) { 
      lsv += 0.09;
      logoLs(logo1);
      logoLs(logo2);
    } 
    else if (lsv < 14) { 
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
});