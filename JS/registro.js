const registro = document.querySelector("#registro"),
    nombre = document.querySelector("#nombre"),
    email = document.querySelector("#email"),
    userName = document.querySelector("#userName"),
    userPass = document.querySelector("#userPass"),
    btnRegistro = document.querySelector("#btnRegistro");

let usuarios;

if (localStorage.getItem("usuarios")){
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
}else {
    usuarios = [];
    }

function Usuario (nombre, email, usuario, pass){
    this.nombre = nombre;
    this.email = email;
    this.usuario = usuario;
    this.pass = pass;
} 

function guardarUsuario(usuario){
    return usuarios.push(usuario)
}

function guardarEnStorage(elemento){
    return localStorage.setItem('usuarios', JSON.stringify(elemento))

}

function borrarCampos() {
    nombre.value = "";
    email.value = "";
    userName.value = "";
    userPass.value = "";
}

btnRegistro.addEventListener("click",(e) =>{
    e.preventDefault();
    let nuevoUsuario = new Usuario(
        nombre.value,
        email.value,
        userName.value,
        userPass.value
    );
    guardarUsuario(nuevoUsuario);
    borrarCampos();
    guardarEnStorage(usuarios);
})
