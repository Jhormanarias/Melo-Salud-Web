//url 
const url = 'http://localhost:3000/';

//Fecha para el nombre del documento
var hoy = new Date();

//Boton Horarios en el home
let btnHorarios = document.getElementById('btnHorarios');

//Textbox para mostrar la tabla
let especialidadSolicitada = document.getElementById('especialidadSolicitada');

//tabla
let tablaDatos = document.getElementById('tablaDatos');

//Div que no se muestra que tiene el titulo, la tabla y el boton imprimir
let tablaVisibleBtnVisible = document.getElementById('tablaVisibleBtnVisible');
let tablaPdf = document.getElementById('tablaPdf');

//Inicializar la tabla que no se vea
tablaVisibleBtnVisible.style.display = "none";
tablaPdf.style.display = "none";

//Mostrar datos de la Del personal y turnos según  servicios solicitados
btnHorarios.addEventListener('click', ()=>{
  if(especialidadSolicitada.value=='Pediatría')
  {
    tablaVisibleBtnVisible.style.display = "block";
    tablaPdf.style.display = "block";
    traerDatosTabla();
  }
  if(especialidadSolicitada.value=='Psiquiatría')
  {
    tablaVisibleBtnVisible.style.display = "block";
    tablaPdf.style.display = "block";
    traerDatosTabla();
  }
  if(especialidadSolicitada.value=='Enfermería')
  {
    tablaVisibleBtnVisible.style.display = "block";
    tablaPdf.style.display = "block";
    traerDatosTabla();
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

//Función para traer los datos de la tabla según el personal solicitado 
function traerDatosTabla(nombreEspecialidad) 
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
};


// Escuchamos el click del botón e imprimimos
let btnImprimir = document.getElementById("btnImprimir");
btnImprimir.addEventListener("click", () => {
ExportXLSX();
});


//Exporta la tabla a un excel XSLX usando la ayuda de la libreria export
function ExportXLSX(){
  $('#tablaDatos').tableExport({
    fileName: 'Horarios'+hoy,
    type: 'xlsx'
  });
}