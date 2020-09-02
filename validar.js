function validar() {

    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("pass").value;
    var telefono = document.getElementById("telefono").value;

    if ((nombre == "") || (apellidos =="") || (correo == "") || (usuario =="") || (contrasena == "") ||(telefono =="") ) {
        alert("Todos los campos son obligatorios");
        return false;
    }
    if (nombre.length>30) {
        alert("El nombre es muy largo");
        return false;
    }
    if (apellido.length>80) {
        alert("Los apellidos son muy largos");
        return false;
    }
    if ((!correo.includes('@')) || (!correo.includes('.')) || (correo.length > 100)) {
        alert("El correo no es válido");
        return false;
    }
    if (usuario.length>20) {
        alert("El usuario es muy largo");
        return false;
    }
    if ((telefono.length>15) && ((telefono%1)!=0)) {
        alert("El teléfono no es válido");
        return false;
    }
    if ((nombre != "") && (apellidos != "") && (correo != "") && (usuario != "") && (contrasena != "") && (telefono != "")) {
        alert("Bienvenid@ " + "" + nombre + " " + apellidos + " usuario: " + usuario + " contraseña: " + contrasena);
        return false;
    }

}
