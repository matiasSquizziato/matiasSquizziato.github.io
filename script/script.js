
function validar() {
    var frm = document.getElementById("frm");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var categoria = document.getElementById("categoria");
    var email = document.getElementById("email");
    var denuncia = document.getElementById("denuncia");
    //array vacio
    let errores = [];
    listErrores.innerHTML = "";
    nombre.classList.remove("error");
    apellido.classList.remove("error");
    categoria.classList.remove("error");
    email.classList.remove("error");
    denuncia.classList.remove("error");

    //validar nombre
    if(nombre.value == ""){
        errores.push("Debe ingresar el nombre");
        nombre.classList.add("error");
        isValid = false;
    } 

    //validar apellido
    if(apellido.value == ""){
        errores.push("Debe ingresar el apellido");
        apellido.classList("error");
        isValid = false;
    }

    //validar categoria
    if(categoria == ""){
        errores.push("Debe selccionar una categoria")
        isValid = false;
    }



    if(denuncia.value.length > 200){
        errores.push("No debe superar los 200 caracteres");
        denuncia.classList.add("error");
        isValid = false;
    }

    // Validar campo email si se proporciona
    if (email.value && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
        errores.push("Debe ingresar un mail valido");
        email.classList.add("error");
        isValid = false;
      }


    if(isValid){
        agregarMensaje(nombre.value, categoria.value, email.value);

    } else {
        mostrarErrores();
    }

    
}

function agregarMensaje(nombre, categoria, email) {
    const listMensajes = document.getElementById("listMensajes");
    const newMessage = document.createElement("li"); // Cambiamos de ol a li

    newMessage.textContent = `${nombre} Categoria "${categoria}". Contacto: ${email}.`;
    listMensajes.appendChild(newMessage);
}

function mostrarErrores() {
    let erroresHtml = errores.join("<br>");
    listErrores.innerHTML = erroresHtml;
}