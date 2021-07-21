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
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            mybutton.css("display", "block"); // show the button
        } else {
          mybutton.css("display", "none"); // hide the button
        }
    });

  // When the user clicks on the button, scroll to the top of the document
  mybutton.click( function(){
    $([document.documentElement, document.body]).animate({ scrollTop: $("#body").offset().top}, 800);
  } );

// index section ends
// script for add cart page starts

var prize = $("#prize").html();                     // product prize as string
var prizenum  = parseFloat(prize);                    //changing product prize as number
var a = toString(prizenum);
var unit = $("#quantity");                          //input tag
var value = $("#quantity").val();                   //number of quantity which get the input  value from customer as string
var valuenum = parseInt(value);                     //changing quantity value as number
var totaldiv = $(".total_quantity");                //parent div of total which is use to append child(total)
console.log(a);
if(value <= 1){
  var h4 = $("<h4></h4>");
  h4.text(prize);
  totaldiv.append(h4);
}
unit.change(function(){
    
  console.log(typeof prize);
  console.log(typeof value);
  console.log(typeof prizenum);
  console.log(typeof valuenum);
  console.log(prizenum);
  console.log(valuenum);
  var total = prizenum * valuenum;
  h4.text(total);
  
});
//script for add cart page ends

//----end of document ready function-----
});



