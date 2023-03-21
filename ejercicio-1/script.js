const nombreInput = document.querySelector('#nombreInput');
const apellidoInput = document.querySelector('#apellidoInput');
const fechaInput = document.querySelector('#fechaInput');
const cedulaInput = document.querySelector('#cedulaInput');
const fullName = document.querySelector('#fullName');
const cumpleaños = document.querySelector('#cumpleaños');
const busqueda = document.querySelector('#busqueda')
const arregloPersonas = [];
class Persona {
    nombre
    apellido
    fecha
    cedula
    edad
    nombreCompleto
    constructor(nombre, apellido, fecha, cedula) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha = fecha + ':';
        this.cedula = cedula;
        this.edadCalculo()
        this.nombreCompletoFunction()
        this.cumpleaños()
    }
    edadCalculo() {
        let newFecha = new Date(this.fecha)
        console.log(newFecha)
        this.edad = 2023 - newFecha.getFullYear()
    }
    nombreCompletoFunction() {
        this.nombreCompleto = this.nombre + ' ' + this.apellido
        console.log(this.nombreCompleto)
        const respuesta = document.createElement('h1')
        respuesta.textContent = this.nombreCompleto
        fullName.appendChild(respuesta)
    }
    cumpleaños() {
        let newFecha = new Date(this.fecha)
        let fecha = new Date()
        if (newFecha.getDate() == fecha.getDate() && newFecha.getMonth() == fecha.getMonth()) {
            const respuesta = document.createElement('h1')
            respuesta.textContent = 'Sí'
            cumpleaños.appendChild(respuesta)
        } else {
            const respuesta = document.createElement('h1')
            respuesta.textContent = 'No'
            cumpleaños.appendChild(respuesta)
        }
    }
}
function guardar() {
    if (nombreInput.value != '' && apellidoInput.value != '' && fechaInput.value != '' && cedulaInput.value != '') {
        let persona = new Persona(nombreInput.value, apellidoInput.value, fechaInput.value, cedulaInput.value);
        arregloPersonas.push(persona);
        nombreInput.value = ''
        apellidoInput.value = ''
        fechaInput.value = ''
        cedulaInput.value = ''
        console.log(arregloPersonas)
    } else {
        alert('Debe llenar toda la información')

    }
}
busqueda.addEventListener('keyup', function (e) {
    if (e.keyCode == 13) {
        if (busqueda.value != '') {
            for(let i = 0; i < arregloPersonas.length; i++) {
            let {cedula} = arregloPersonas[i]
            if(cedula == busqueda.value) {
                localStorage.setItem('name', arregloPersonas[i].nombre)
                localStorage.setItem('lastName',arregloPersonas[i].apellido)
                localStorage.setItem('fechas',arregloPersonas[i].fecha)
                location.href = 'card.html';

            }
            }
        }
    }
})