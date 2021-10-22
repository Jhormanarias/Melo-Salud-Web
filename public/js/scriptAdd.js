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

  //Contar los días y no ser mayor a 5 porque hay descanso
  //Lo hice con un CDN llamado moment
  var fecha1 = moment(fechaInicio.value);
  var fecha2 = moment(fechaFin.value);
  //Verifico el número de resultado en consola
  console.log(fecha2.diff(fecha1, "days"));



  //Validar los campos
  //Condiciones para validar
  if(numeroCedula.value.lenght==0 || nombre.value.lenght==0 || apellidos.value.lenght==0 || especialidad.value=='Selecciona una especialidad:' || fechaInicio.value.length == 0 || fechaFin.value.length == 0 || turno.value=='Selecciona una turno:')
  {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Llene todos los campos correctamente",
    });
  }
  //Valido que la fecha fin no sea anterior a la fecha de inicio
  else if (fecha2.diff(fecha1, "days") < 0) 
  {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "La fecha fin no puede ser menor a la fecha de inicio!",
    });
  }
  //COMIENZO ELSE
  else
  {
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
  }
  //FIN ELSE  
);

