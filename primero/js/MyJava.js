//alert("Hola mundo")
/*Ejemplo de variables*/
var Nombre="Harold Brito";
var Ocupacion="Fotografo";
//alert("Hola " +Nombre)
//Ejemplo de funciones
function ValidarForm()
{
	//alert("Has llamado a la funcion")
	if(document.frmContacto.txtNombre.value.length==0)
	{
		alert("Favor digitar su nombre")
		document.frmContacto.txtNombre.focus()
		return	false
		
	}
	
	if(document.frmContacto.txtCorreo.value.length==0)
	{
		alert("Favor digitar su Correo")
		document.frmContacto.txtCorreo.focus()
		return	false
	}
	if(document.frmContacto.txtTelefono.value.length==0)
	{
		alert("Favor digitar su Telefono")
		document.frmContacto.txtTelefono.focus()
		return	false

	}
	if(document.frmContacto.txtSexo.selectedIndex==0)
	{
		alert("Favor elegir su Sexo")
		document.frmContacto.txtSexo.focus()
		return	false
	}
}

