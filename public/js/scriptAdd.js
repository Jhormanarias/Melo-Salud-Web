//url
const urlAdd = 'http://localhost:3000/add';

//Inputs que necesito para insertar un personal
let numeroCedula = document.getElementById('numeroCedula');
let nombre = document.getElementById('nombre');
let apellidos = document.getElementById('apellidos');
let especialidad = document.getElementById('selectEspecialidad');
let fechaInicio = document.getElementById('fechaInicio');
let fechaFin = document.getElementById('fechaFin');
let turno = document.getElementById('selectTurno');

//Formulario para insertar
let formInsertar = document.getElementById('formInsertar');

//Guardar datos De la página agregar personal
formInsertar.addEventListener('submit', (e)=>{
    e.preventDefault();
    fetch(urlAdd, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cedula : numeroCedula.value, 
            nombre :nombre.value,
            apellidos :apellidos.value,
            especialidad :especialidad.value,
            fecha_inicio :fechaInicio.value,
            fecha_fin :fechaFin.value,
            turno :turno.value
        })
      })
      .then(response => response.json())
      .then(response =>
        {
            Swal.fire(
                'Felicidades!',
                'Usuario '+nombre.value+' Guardado!',
                'success'
              );
            window.location.href = urlAdd;
        }
      )
    }
);

