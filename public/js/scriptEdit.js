//Url de la api para consulta actualizar
let url = 'http://localhost:3000/api/EditPersonal/';
let id = 0;

//Url para redireccionar
let urlRedirect = 'http://localhost:3000/'

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
    //Prevenir recarga del formulario
    e.preventDefault();
    //Contar los días y no ser mayor a 5 porque hay descanso
    //Lo hice con un CDN llamado moment
    var fecha1 = moment(fechaInicio.value);
    var fecha2 = moment(fechaFin.value);
    //Verifico el número de resultado en consola
    console.log(fecha2.diff(fecha1, 'days'));

    //Si es mayor a 5 días -- No deja insertar
    if(fecha2.diff(fecha1, 'days')>5)
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Sólo pueden ser 5 días!'
          })
    }
    else  //De lo contrario que haga la consulta y a cada uno le asigne un horario aleatoriamente
    {
        for (id; id<=50; id++) //Para ponerle el ID a la url y hacer la consulta
        {
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
            .then(datos => console.log(datos))
        };
        Swal.fire(
            'Felicidades!',
            'Horarios Generados!',
            'success'
        );
        FormGenAleatorio.style.display="none";
        window.location.href = urlRedirect;
    }

    


});



//---------Funciones----------
//Función para generar un indice aleatorio del Array de turnos
function getRandomIndTurno(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}
