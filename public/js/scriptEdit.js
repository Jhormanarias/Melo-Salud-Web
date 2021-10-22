//Url de la api
let url = 'http://localhost:3000/api/EditPersonal/';

let id = 3;


//Objetos html
let btnGenAl = document.getElementById('btnGenAl');
let FormGenAleatorio = document.getElementById('FormGenAleatorio');//Para desplegar el formulario visible-No visible
let formAleatorio = document.getElementById('formAleatorio')
let btnRandom = document.getElementById('btnRandom');


//Inicializar la página con este div invisible
FormGenAleatorio.style.display="none";


//Inputs que necesito para editar
let fechaInicio = document.getElementById('fechaInicio');
let fechaFin = document.getElementById('fechaFin');
let turno = ['Turno 1 (6:00 A.M a 2:00 P.M)','Turno 2 (2:00 P.M a 10:00 P.M)','Turno 3 (10:00 P.M a 6:00 A.M)']; //Esto para poder asignarlo aleatoriamente a la BD


//Que al clickear el boton generar aleatorio se despliegue un formulario o se esconda
btnGenAl.addEventListener('click', ()=>{
    if(FormGenAleatorio.style.display=="none")
    {
        FormGenAleatorio.style.display="block"
    }
    else
    {
        FormGenAleatorio.style.display="none"
    }
});


//Al clickear el botón de generar y subir a la BD un turno aleatorio
formAleatorio.addEventListener('submit', (e) => {
    e.preventDefault();
    result = getRandomIndTurno(0, turno.length-1);
    console.log(turno[result])
    let data = {
        "fecha_inicio": fechaInicio.value,
        "fecha_fin": fechaFin.value,
        "turno": turno[result]
    };
    fetch(url+id,{
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json' 
        }
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    .then(datos => {
        Swal.fire(
            'Felicidades!',
            'Horarios Generados!',
            'success'
        );
        FormGenAleatorio.style.display="none";
    })
});


//---------Funciones----------
//Función para generar un indice aleatorio del Array de turnos
function getRandomIndTurno(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}