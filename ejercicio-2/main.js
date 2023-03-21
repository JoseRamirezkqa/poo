const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const edad = document.querySelector('#edad');
const save = document.querySelector('#save');
const table = document.querySelector('#table')
save.addEventListener('click', () => {
    if (nombre.value != '' && apellido.value != '' && edad.value != '') {
        const nombreText = document.createElement('div')
        nombreText.textContent = `${nombre.value}`
        nombreText.classList = 'border border-black'
        table.appendChild(nombreText)
        const apellidoText = document.createElement('div')
        apellidoText.textContent = ` ${apellido.value}`
        apellidoText.classList = 'border border-black'
        table.appendChild(apellidoText)
        const edadText = document.createElement('div')
        edadText.textContent = `${edad.value}`
        edadText.classList = 'border border-black'
        table.appendChild(edadText)

    }
})