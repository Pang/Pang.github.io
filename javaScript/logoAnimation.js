window.addEventListener("load", function startPageEvent() {
    
  //current letter spacing value.
  let lsv = 0;

  //logo ID element
  const logo1 = document.getElementById("logo1");
  const logo2 = document.getElementById("logo2");

  //set interval of expand function by 10 milliseconds.
  const time = setInterval(expand, 20);

  //changes the letterSpacing to equal the 'lsv' value.
  const logoLs = x => { x.style.letterSpacing = lsv+"px";}

  //function that sets animation speed and dur.
  function expand() {
    if (lsv >= 30) {
      clearInterval(time);
    }
    else if (lsv < 27) {
      lsv += 0.18;
      logoLs(logo1);
      logoLs(logo2);
    } 
    else if (lsv < 28) { 
      lsv += 0.09;
      logoLs(logo1);
      logoLs(logo2);
    } 
    else if (lsv < 29) { 
      lsv += 0.06;
      logoLs(logo1);
      logoLs(logo2);
    } 
    else {
      lsv += 0.02;
      logoLs(logo1);
      logoLs(logo2);
    }
  }
});