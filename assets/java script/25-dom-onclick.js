console.log("25-dom-onclick.js is working...");
 // fuction declaration
 const body = document.querySelector("body");
  function changeBackgroundcolorToRed() {
    console.log("this buton has been clicked");
    // document.querySelector("body").style.backgroundColor("bg-dark" , "text-white");
    //document.body.classList.add("bg-dark" , "text-white");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    title = "white mode"
  }
    

  