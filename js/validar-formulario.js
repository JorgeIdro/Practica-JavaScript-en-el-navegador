const formulario = document.querySelector('.formulario');
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');
const datosInputs = { // Objecto global
    nombre: '',
    email: '',
    mensaje: ''
}

nombreInput.addEventListener('input', leerTexto);
emailInput.addEventListener('input', leerTexto);
mensajeInput.addEventListener('input', leerTexto);

function leerTexto(e) {
    /*console.log(e.target.value);
    console.log(datosInputs);*/
    datosInputs[e.target.id] = e.target.value; // Todo lo que se escriba se guarda en la propiedad con el mismo nombre del id
}

formulario.addEventListener('submit', function (e) { // En caso de ser un formulario debe utilizarse el submit
    e.preventDefault();
    console.log();

    // Validar formulario
    const {nombre, email, mensaje} = datosInputs; // destructuring
    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    // Mostrar alerta de error
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; // Evita que siga ejecutándose el código
    }
    
    // Mostrar alerta de correcto
    mostrarAlerta('Se envió correctamente');

    // probando en consola
    console.log('Enviando formulario...')
})

function mostrarAlerta(mensaje, error = null) { // por default para la clase correcto
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    
    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    // Desaparece después de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000)
}