// COUNTDOWN TIMER

var target_date = new Date("Aug 22, 2015").getTime();

var days, hours, minutes, seconds;
var countdown = document.getElementById("countdown")
var daydisplay = document.getElementById("days")
var hourdisplay = document.getElementById("hours")
var minutedisplay = document.getElementById("minutes")
var seconddisplay = document.getElementById("seconds")

setInterval(function () {
    
    //find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // do some time calculations    
    days = parseInt( seconds_left / 86400 );
    seconds_left = seconds_left % 86400;
    
    hours = parseInt( seconds_left / 3600 );
    seconds_left = seconds_left % 3600;
    
    minutes = parseInt( seconds_left / 60 );
    seconds = parseInt( seconds_left % 60 );
    
//Push Various Time Variables To HTML
        
    daydisplay.innerHTML = days;
    hourdisplay.innerHTML = hours;
    minutedisplay.innerHTML = minutes;
    seconddisplay.innerHTML = seconds;

}, 1000);


//SMOOTH SCROLL

// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 800);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});

//SHOW PROFILE HEADER
    function profileSlide() {
        $('.profile_title').slideToggle(1500);    
    }

    $('.who').click(profileSlide);

//SHOW Map

    function mapSlide() {
        $('#map_area').slideToggle(1500);    
    }

    $('.where').click(mapSlide);


// STARTING COVER
$(document).ready(function() {  

        var id = '.window'; 
        var part1 = '#part1';
        var part2 = '#part2';
        var part3 = '#part3';
    
        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
    
        //Set height and width to mask to fill up the whole screen
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        
        //transition effect     
        $('#mask').fadeIn(1000);   
        $('#mask').fadeTo("slow",0.93);  
    
        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();
              
        //Set the popup window to center
        $(part1).css('top',  winH/2-$(id).height()/2-150);
        $(part1).css('left', winW/2-$(id).width()/2);

        $(part2).css('top',  winH/2-$(id).height()/2-50);
        $(part2).css('left', winW/2-$(id).width()/2);

        $(part3).css('top',  winH/2-$(id).height()/2+50);
        $(part3).css('left', winW/2-$(id).width()/2);

        $(part4).css('top',  winH/2-$(id).height()/2+150);
        $(part4).css('left', winW/2-$(id).width()/2);
    
    
        //transition effect
        $(part1).fadeIn(4000);
        $(part2).delay(3400).fadeIn(3500);
        $(part3).delay(5600).fadeIn(3500);
        $(part4).delay(10100).fadeIn(2000);
    
    //if close button is clicked
    $('.window .close').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();
        
        $('#mask').fadeOut();
        $('.window').remove();
        $('audio').remove();
    });     
    
    //if mask is clicked
    $('#mask').click(function () {
        $(this).fadeOut();
        $('.window').remove();
        $('audio').remove();
    });     
    
});

