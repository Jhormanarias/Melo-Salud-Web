//url 
const url = 'http://localhost:4000/api/personal/';

//Boton Horarios en el home
let btnHorarios = document.getElementById('btnHorarios');

//Textbox para mostrar la tabla
let especialidadSolicitada = document.getElementById('especialidadSolicitada');

//tabla
let tablaDatos = document.getElementById('tablaDatos');

//Inicializar la tabla que no se vea
tablaDatos.style.display = "none";

//Mostrar datos de la Del personal y turnos según  servicios solicitados
btnHorarios.addEventListener('click', ()=>{
  if(especialidadSolicitada.value=='Pediatría')
  {
    fetch(url + especialidadSolicitada.value)
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(datos => {
        tablaDatos.innerHTML = `
        <thead>
          <tr>
            <th scope="col">Cedula</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Especialidad</th>
            <th scope="col">Fecha inicio</th>
            <th scope="col">Fecha fin</th>
            <th scope="col">Turno</th>
          </tr>
        </thead>`;
        tablaDatos.style.display = "block";
        for (let i = 0; i < datos.length; i++) {
          tablaDatos.innerHTML += ` 
        <tr>
          <td>${datos[i].cedula}</td>
          <td>${datos[i].nombre}</td>
          <td>${datos[i].apellidos}</td>
          <td>${datos[i].especialidad}</td>
          <td>${datos[i].fecha_inicio}</td> 
          <td>${datos[i].fecha_fin}</td> 
          <td>${datos[i].turno}</td>     
        </tr>
        `
        }
      }
      );
  }
  if(especialidadSolicitada.value=='Psiquiatría')
  {
    fetch(url + especialidadSolicitada.value)
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(datos => {
        tablaDatos.innerHTML = `
        <thead>
          <tr>
            <th scope="col">Cedula</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Especialidad</th>
            <th scope="col">Fecha inicio</th>
            <th scope="col">Fecha fin</th>
            <th scope="col">Turno</th>
          </tr>
        </thead>`;
        tablaDatos.style.display = "block";
        for (let i = 0; i < datos.length; i++) {
          tablaDatos.innerHTML += ` 
        <tr>
          <td>${datos[i].cedula}</td>
          <td>${datos[i].nombre}</td>
          <td>${datos[i].apellidos}</td>
          <td>${datos[i].especialidad}</td>
          <td>${datos[i].fecha_inicio}</td> 
          <td>${datos[i].fecha_fin}</td> 
          <td>${datos[i].turno}</td>     
        </tr>
        `
        }
      }
      );
  }
  if(especialidadSolicitada.value=='Enfermería')
  {
    fetch(url + especialidadSolicitada.value)
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(datos => {
        tablaDatos.innerHTML = `
        <thead>
          <tr>
            <th scope="col">Cedula</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Especialidad</th>
            <th scope="col">Fecha inicio</th>
            <th scope="col">Fecha fin</th>
            <th scope="col">Turno</th>
          </tr>
        </thead>`;
        tablaDatos.style.display = "block";
        for (let i = 0; i < datos.length; i++) {
          tablaDatos.innerHTML += ` 
        <tr>
          <td>${datos[i].cedula}</td>
          <td>${datos[i].nombre}</td>
          <td>${datos[i].apellidos}</td>
          <td>${datos[i].especialidad}</td>
          <td>${datos[i].fecha_inicio}</td> 
          <td>${datos[i].fecha_fin}</td> 
          <td>${datos[i].turno}</td>     
        </tr>
        `
        }
      }
      );
  }
  if(especialidadSolicitada.value=='Selecciona una especialidad:')
  {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No has seleccionado nada!'
    })
  }
  
})


