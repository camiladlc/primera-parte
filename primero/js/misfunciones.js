$(document).ready(function()
{
	$("header #Logo").hover(function(){
        $(this).fadeOut(1200).fadeIn(1200);  
    });  
    
    $("a, #Menu").hover(function(){

        $(this).fadeOut(1200).fadeIn(1200);
        $('footer p').hide(500);
    });    
    $("#bienvenidos").click(function(){
        $(this).hide(1500);
        $(this).show(1500);
        $('#blog').fadeIn();
        
    });  
    
     $("#banner").click(function(){
        $("#banner .contenedor h2").css("color", "#ccddee").slideDown(1500).slideDown(1500);
    }); 
    
  
    
});
    
    