const user = 'Roberto'
const pass = 'Cafe123'
let saldo = 5000

const productos = [
    {id: 1, nombre: 'Lapicera', precio: 50},
    {id: 2, nombre: 'Agenda', precio: 200},
    {id: 3, nombre: 'Bloc de notas', precio: 100},
    {id: 4, nombre: 'Hojas', precio: 700},
    {id: 5, nombre: 'Mouse', precio: 800},
    {id: 6, nombre: 'Teclado', precio: 1000},
];

function Producto(id, nombre, precio){
    this.id=id;
    this.nombre=nombre;
    this.precio=nombre;
}

function filtrarPrecioMayor(arr, filtro){
    const filtrado = arr.filter((prod)=>{
        return prod.precio >= filtro ;
    })
    return filtrado;
}

function filtrarPrecioMenor(arr, filtro){
    const filtrado = arr.filter((prod)=>{
        return prod.precio <= filtro ;
    })
    return filtrado;
}

function loginUser(){
const nombreUsuario = prompt("Ingresa tu usuario: ");
const passUsuario = prompt('Ingresa tu contrasena: ')
if(user==nombreUsuario && pass==passUsuario){
    alert('Bienvenido/a ' + nombreUsuario);
    let opcion = prompt('Elegí una opción: \n1 - Consultar saldo \n2 - Filtrar productos mayores a: \n3 - Filtrar productos menores a: \n4 - Depositar  \nPresiona X para finalizar sesión.')
    while (opcion != 'X' && opcion != 'x'){
        switch (opcion) {
            case '1':
                alert('Tu saldo es ' + saldo)
                break;
            case '2':
                let porPrecio1 = prompt('Filtra precios mayores a:')
                console.log(filtrarPrecioMayor(productos, porPrecio1));
                break;
            case '3':
                let porPrecio2 = prompt('Filtra precios menores a:')
                console.log(filtrarPrecioMenor(productos, porPrecio2));
                break;
            case '4':
                let saldoDepositado = parseInt(prompt('Ingresa el monto a depositar:'))
                alert('Saldo depositado con éxito')
                let nuevoSaldo = saldoDepositado + saldo
                alert('Tu saldo actualmente es: ' + nuevoSaldo )
                break;
        
            default:
                break;
        }
                
        opcion = prompt('Elegí una opción: \n1 - Consultar saldo \n2 - Filtrar productos mayores a: \n3 - Filtrar productos menores a: \n4 - Depositar  \nPresiona X para finalizar sesión.');
        
    } }
else{
    alert('Tu usuario no existe o estas ingresando la contrasena incorrecta.');
}
}

function loginPIN(){
    let ingresar = false;
    for (let i=2; i>=0; i--){
        let passUsuario = prompt('Ingresa tu contrasena. Tienes ' + (i+1) + ' oportunidades.');
        if (passUsuario===pass){
            alert('Bienvenido/a, ' + user + '.')
            ingresar=true;
            break;}
            else{
                alert('PIN equivocado.');
            }
        }    
    }

loginUser()
