

function ingresoVerif(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email == "admin@gmail.com" && password == "admin123"){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ingreso exitoso',
        showConfirmButton: false,
        timer: 1500
      })
            window.location.href = "html/productos.html";}
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email o contrasena equivocados',
        })
      }
    }