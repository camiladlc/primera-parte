$(document).ready(function()
{
    /*Seleccionando elementos con el evento Click*/
	$("img").click(function(){
        //$(this).hide(800);
    });
	
	
	
	$("#Slide").hover(function(){
		/*Animamos el Texto del Slide*/
        $("#Slide h3").css("color", "#ccddee").slideUp(2000).slideDown(2000);
        /*Redondeamos los Bordes del Slider*/
		$("#Slide").css("border-radius", "44px");
    });
	

	
	/*Al hacer Hover en el Logo mostraremos la Promo de Bienvenida*/
	$("#Logo").hover(function(){
        $(".PromoHeader").slideToggle(1000);
		
    });
	
	/*Un pequeño efecto a las imagenes del Contenidos*/
	$("#Contenido img").hover(function(){
       //$(this).slideToggle("slow").css("border","4px dotted gray");
		 
    });
	
	/*Un pequeño efecto a las imagenes del Contenidos*/
	$(".Publicidad").hover(function(){
        $(this).slideToggle("slow").css("border-radius","10px","background","blue");
		
    });
		/*Click para mostrar el Formulario contacto mediante el efecto slideToggle()*/
	$("#ClickF").click(function(){
		/*Mostramos el Formulario mediante este efecto*/
        $("#FormContacto").slideToggle("slow");
		
		/*Ocultamos la imagen debajo del Formulario de Ayuda*/
        $("#Contenido section img").hide(500).slideToggle("slow");
    });
	
    
	
});