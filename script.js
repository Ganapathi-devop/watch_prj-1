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

    // $(window).scroll(function(){
    //     function scrollFunction(){
    //         if(document.scrollTop > 20) {
    //             $("#scrolltop").css("display" "block");
    //         }else{
    //             $("#scrolltop").css("display" "none");
    //         }
    //     }
    //     $("#scrolltop").click(function(){
    //         document.body.scrollTop = 0;
    //         document.documentElement.scrollTop = 0;
    //     });
    // });

    //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 10px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $("#mybtn").css("transition" , "1s");
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//onclick to play video on video section
let video = $("iframe");
let cls = $(".video");
let ply = $("#play");
function videopop(){
  ply.click(
    function () {
      video.removeClass(cls);
      console.log("hello");
    }
  )
  ply.click(function(){
    $(this).hide();
  });
}
});


