// script for index(main page) section 
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
    //Getting the button:
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
    var doc = document.documentElement;
    doc.animate({scrollTop = 0}, "slow");
  } );

  //on click funtion for plybtn in video section
  $(".player").click( ()=>{
    var video_div = document.createElement("div");
    var doc = document.getElementsByName("body");
    doc.appendChild(video_div);
  } );

// index section ends
// script for add cart page starts

var prize = $("#prize").val();                     // product prize
var unit = $("#quantity");                  //number of quantity which get the input  value from customer
var value = $("#quantity").val();
var totaldiv = $(".total_quantity");        //parent div of total which is use to append child(total)
 console.log("hello")
console.log(prize);
if(value !== 1){
  prize
}
//script for add cart page ends

//----end of document ready function-----
});



