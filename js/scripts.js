




jQuery(function($) {

	
	$(document).ready(function(){
        
        var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
        
        var current_width = $(window).width();
        var current_height = $(window).height();

        $('.parallax-section, #gmap, #address').css('min-height',current_height);
        $('.attire').css('min-height',current_height-40);
    
        $( window ).resize(function() {
        var current_height = $(window).height();

        $('.parallax-section, #gmap, #address').css('min-height',current_height);
        $('.attire').css('min-height',current_height-40);        });
                           
 
          

        
    });
    
    	$(window).scroll(function(){
            var current_width = $(window).width();
            var current_height = $(window).height();
            var slider_viewport_width = $('#slider1 .viewport').width();
            
            var scrollTop = $(window).scrollTop() + 50;
          //  console.log(scrollTop);
           // var facilities_top = $('.facilities-home').offset().top;
            //var footer_top = $('#footer').offset().top;
            //var facilities_height = $('.facilities-home').height();
      


            

    });

    
   


});