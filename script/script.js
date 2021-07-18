// script for index(main page) section 
$(document).ready(function(){
    let i =4;
    $("#navbar-bar").click(function(){
        if( i % 2 === 0) {
            $("#navbar-list").css("display", "block");
        }else{
            $("#navbar-list").css("display", "none");
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
        }else{
            banner.removeClass("content")
            header.removeClass("sticky");
       }
    });
   //scroll to top button function
    //Getting the button:
  mybutton = $("#scrollbtn");

  // When the user scrolls down 10px from the top of the document, show the button
  $(function () {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            mybutton.css("display", "block"); // show the button
        } else {
          mybutton.css("display", "none"); // hide the button
        }
    });
  });

  // When the user clicks on the button, scroll to the top of the document
  mybutton.click( function() {
    $("html", "body").animate({ scrollTo: 0}, 800);
    console.log("going top");
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



