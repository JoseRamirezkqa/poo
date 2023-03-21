const name = localStorage.getItem("name")
const lastName = localStorage.getItem("lastName")
const fecha = localStorage.getItem("fechas")
const nombre = document.querySelector("#nombre")
const cumpleaños = document.querySelector("#cumpleaños")
const cum = document.querySelector("#cum")
const noCum = document.querySelector("#noCum")
console.log(name, lastName, fecha)
nombre.textContent = `${name}  ${lastName}`;
let fechaModi = fecha.slice(0,-1)
cumpleaños.textContent = fechaModi
function cumpleañosFunction() {
    let newFecha = new Date(fecha)
    let fechaDay = new Date()
    if (newFecha.getDate() == fechaDay.getDate() && newFecha.getMonth() == fechaDay.getMonth()) {
        cum.classList.remove('hidden')
    } else {
        let year = newFecha.getFullYear()
        console.log(year)
        fechaActualizada = fecha.replace(year,'2023')
        console.log(fechaActualizada)
        newFecha = new Date(fechaActualizada)
        console.log(newFecha)
        var mseg_dia = 1000 * 60 * 60 * 24;
        var dias;
        if (fechaDay.getMonth() == newFecha.getMonth() && fechaDay.getDate() > newFecha.getDate())
        newFecha.setFullYear(newFecha.getFullYear() + 1);
        dias = Math.ceil((newFecha.getTime() - fechaDay.getTime()) / (mseg_dia));
        noCum.textContent += `faltan ${dias} para su cumpleaños`
        noCum.classList.remove('hidden')
    }
}
cumpleañosFunction();
function volver(){
    location.href = 'index.html';
}