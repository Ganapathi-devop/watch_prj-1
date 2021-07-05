$(document).ready(function(){
    let i =4;
    $("#navbar-bar").click(function(){
        if( i % 2 === 0) {
            $("#navbar-list").css("display", "block");
            i++
            console.log(i)
        }else{
            $("#navbar-list").css("display", "none");
            console.log(i)
            i++
        }
    });
    var header =  $(".header");
    var banner = $(".banner")
    var sticky = header.offset().top;

    $(window).scroll(function(){
        if(window.pageYOffset > 150){
            banner.addClass("content")
            header.addClass("sticky");
            console.log("if");
        }else{
            banner.removeClass("content")
            header.removeClass("sticky");
            console.log("else");
        }
    });
   //scroll to top button function
    //Get the button:
  mybutton = document.getElementById("scrollbtn");

  // When the user scrolls down 10px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15 ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  $("#scrollbtn").click( function topFunction() {
    document.documentElement.scrollTop = 0;
  } );

  //on click funtion for plybtn in video section
  $(".player").click( ()=>{
    var video_div = document.createElement("div");
    var doc = document.getElementsByName("body");
    doc.appendChild(video_div);
  } );



//----end of document ready function-----
});


